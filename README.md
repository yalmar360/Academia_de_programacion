# Academia de Programación

Aplicación educativa en español que funciona directamente en el navegador, sin proceso de instalación ni servidor.

## Uso

Inicia el servidor incluido desde esta carpeta y abre `http://localhost:8000/` en un navegador moderno:

```powershell
node .\servidor-local.js
```

El servidor también muestra una dirección con la IP local del equipo. Puedes compartir esa dirección con otra persona conectada a la misma red Wi-Fi (por ejemplo, `http://192.168.1.6:8000/`). Mantén la terminal del servidor abierta. Si Windows Firewall pregunta, permite el acceso en redes privadas para que otros dispositivos de tu red puedan conectarse.

La aplicación ofrece lecciones con explicaciones ampliadas, quizzes, glosario y un compilador educativo. Python se ejecuta de verdad en un Web Worker con Pyodide (WebAssembly), separado del hilo de la interfaz y con límite de 30 segundos. En la primera ejecución se descarga Pyodide desde jsDelivr, por lo que se necesita conexión a internet; paquetes compatibles se descargan automáticamente cuando el código los importa. El entorno no tiene acceso al DOM de la página ni a archivos del equipo. C++ y Java siguen siendo simulaciones educativas.

El panel de aprendizaje registra los conceptos visitados, los quizzes realizados y el último tema consultado para que puedas retomar el recorrido. El progreso, los proyectos y las últimas 30 ejecuciones se guardan en el almacenamiento local del navegador; esos datos son propios de cada navegador y dispositivo.

## Estructura

- `academia_programacion.html`: estructura y pantallas de la aplicación.
- `style.css`: estilos globales y diseño adaptable.
- `script.js`: contenido, navegación, simulaciones de C++/Java y persistencia local del progreso y los proyectos.
- `python-runner.js`: worker aislado que carga Pyodide y ejecuta Python real.
- `servidor-local.js`: servidor web local sin dependencias externas; publica solo los archivos de la academia.

## Ampliación

El contenido se puede ampliar mediante los arreglos `TOPICS` y `QUIZZES` de `script.js`. Los lenguajes disponibles y sus plantillas están definidos en `LANG_META` y `TEMPLATES`. El compilador es una simulación en el navegador, no un entorno para compilar código real. Para admitir cuentas, sincronización entre dispositivos o compilación real, hará falta añadir un backend y mover esos servicios fuera del navegador.
