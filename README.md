# Academia de Programación

Aplicación educativa en español que se ejecuta en el navegador y puede compartirse dentro de una red local.

## Inicio y uso compartido

Desde PowerShell, en esta carpeta, inicia el servidor:

```powershell
node .\servidor-local.js
```

Abre `http://localhost:8000/`. El servidor también muestra la dirección LAN para abrir la academia desde otro dispositivo conectado a la misma red. Mantén la terminal abierta mientras se usa. Esto comparte el proyecto en la red local; no lo publica en Internet.

## Funciones de aprendizaje

- Ruta temática guiada con nivel, objetivo, prerrequisito sugerido y progreso guardado en el navegador.
- Lecciones con explicaciones ampliadas y ejemplos.
- Quizzes con preguntas y opciones aleatorias, explicación por respuesta y repaso de errores.
- Retos introductorios para Python y JavaScript con pistas y comprobaciones automáticas.
- Glosario con contexto práctico y relaciones entre conceptos.

## Editor y ejecución

El editor incluye resaltado básico, numeración de líneas, autocompletado de sugerencias, sangría con Tab, atajo Ctrl+Enter y borradores automáticos por lenguaje. Los proyectos guardados pueden exportarse o importarse como JSON.

Python se ejecuta con Pyodide en un Web Worker, con límite de tiempo; la primera ejecución descarga el motor desde jsDelivr y necesita internet. JavaScript se ejecuta en otro Web Worker con límite de 10 segundos. Los Web Workers separan estas ejecuciones del hilo visual, pero no equivalen a un entorno de seguridad profesional para código no confiable.

C, C++, C# y Java requieren un endpoint Judge0 compatible configurado en «Compilador remoto». Se puede necesitar un token y que el servidor permita CORS. Al ejecutar esos lenguajes, la academia muestra una confirmación y envía el código y stdin al servicio configurado. El endpoint se guarda localmente; el token solo vive en memoria mientras la pestaña permanece abierta. La aplicación no incorpora un servicio de compilación remoto propio.

## Estructura

- `academia_programacion.html`: estructura y pantallas de la aplicación.
- `language-syntax.js`: guías, ejemplos y cuestionario de sintaxis para ocho lenguajes.
- `learning-path.js`: objetivos de temas y retos de práctica.
- `style.css`: estilos y diseño adaptable.
- `script.js`: navegación, editor, persistencia, quizzes, proyectos y conexión de motores.
- `python-runner.js` y `javascript-runner.js`: workers de ejecución en navegador.
- `servidor-local.js`: servidor local que publica solo los archivos permitidos.
