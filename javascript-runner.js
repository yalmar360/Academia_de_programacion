/* Ejecuta JavaScript del estudiante en un Web Worker sin acceso al DOM. */
self.onmessage = async ({ data }) => {
  const stdout = [];
  const stderr = [];
  const lines = Array.isArray(data.stdin) ? data.stdin.slice() : [];
  const format = (value) => {
    if (typeof value === "string") return value;
    try { return JSON.stringify(value); } catch { return String(value); }
  };
  const write = (target, values) => target.push(values.map(format).join(" "));
  const consoleProxy = {
    log: (...values) => write(stdout, values),
    info: (...values) => write(stdout, values),
    warn: (...values) => write(stderr, values),
    error: (...values) => write(stderr, values),
    table: (value) => write(stdout, [value]),
  };
  const prompt = (message = "") => {
    if (message) stdout.push(String(message));
    if (!lines.length) throw new Error("No hay más datos en la entrada estándar.");
    return lines.shift();
  };

  try {
    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
    const execute = new AsyncFunction("console", "prompt", data.code);
    await execute(consoleProxy, prompt);
    self.postMessage({ type: "result", result: { stdout: stdout.join("\n").slice(0, 100000), stderr: stderr.join("\n").slice(0, 30000), exitCode: stderr.length ? 1 : 0 } });
  } catch (error) {
    self.postMessage({ type: "result", result: { stdout: stdout.join("\n").slice(0, 100000), stderr: [...stderr, error?.stack || error?.message || String(error)].join("\n").slice(0, 30000), exitCode: 1 } });
  }
};
