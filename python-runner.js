/* Python real en un worker: sin acceso al DOM y terminable ante ejecuciones largas. */
const PYODIDE_INDEX = 'https://cdn.jsdelivr.net/pyodide/v314.0.7/full/';
let pyodidePromise;

async function getPyodide() {
  if (!pyodidePromise) {
    self.postMessage({ type: 'status', phase: 'loading', message: 'Descargando motor Python…' });
    importScripts(`${PYODIDE_INDEX}pyodide.js`);
    pyodidePromise = loadPyodide({ indexURL: PYODIDE_INDEX });
  }
  return pyodidePromise;
}

self.onmessage = async ({ data }) => {
  try {
    const pyodide = await getPyodide();
    self.postMessage({ type: 'status', phase: 'packages', message: 'Preparando paquetes…' });
    await pyodide.loadPackagesFromImports(data.code);

    const source = JSON.stringify(data.code);
    const stdin = JSON.stringify(Array.isArray(data.stdin) ? data.stdin : []);
    const wrapper = `
import builtins, contextlib, io, json, traceback
_source = json.loads(${JSON.stringify(source)})
_input_lines = iter(json.loads(${JSON.stringify(stdin)}))
_stdout, _stderr = io.StringIO(), io.StringIO()
def _read_input(prompt=''):
    if prompt:
        print(prompt, end='', file=_stdout, flush=True)
    try:
        return next(_input_lines)
    except StopIteration:
        raise EOFError('No hay más datos en la entrada estándar')
_namespace = {'__name__': '__main__'}
_exit_code = 0
with contextlib.redirect_stdout(_stdout), contextlib.redirect_stderr(_stderr):
    builtins.input = _read_input
    try:
        exec(compile(_source, '<editor>', 'exec'), _namespace)
    except BaseException:
        _exit_code = 1
        traceback.print_exc(file=_stderr)
json.dumps({'stdout': _stdout.getvalue(), 'stderr': _stderr.getvalue(), 'exitCode': _exit_code})
`;
    self.postMessage({ type: 'status', phase: 'running', message: 'Ejecutando Python…' });
    const resultJson = await pyodide.runPythonAsync(wrapper);
    const result = JSON.parse(resultJson);
    result.stdout = result.stdout.slice(0, 100000);
    result.stderr = result.stderr.slice(0, 30000);
    self.postMessage({ type: 'result', result });
  } catch (error) {
    self.postMessage({ type: 'error', message: error?.message || String(error) });
  }
};
