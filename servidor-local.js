const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

const PORT = Number(process.env.PORT || 8000);
const ROOT = __dirname;
const FILES = new Set([
  "academia_programacion.html",
  "script.js",
  "style.css",
  "python-runner.js",
  "README.md",
]);
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
};

const server = http.createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400).end("Solicitud inválida");
    return;
  }

  const filename = pathname === "/" ? "academia_programacion.html" : pathname.slice(1);
  if (!FILES.has(filename)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("No encontrado");
    return;
  }

  fs.readFile(path.join(ROOT, filename), (error, content) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("No encontrado");
      return;
    }
    response.writeHead(200, {
      "Content-Type": TYPES[path.extname(filename)] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    response.end(content);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Academia disponible en este equipo: http://localhost:${PORT}/`);
  const addresses = Object.values(os.networkInterfaces()).flat().filter(
    (item) => item && item.family === "IPv4" && !item.internal,
  );
  for (const address of addresses) {
    console.log(`Para compartir en la misma red: http://${address.address}:${PORT}/`);
  }
  console.log("Mantén esta terminal abierta mientras compartes el proyecto. Ctrl+C detiene el servidor.");
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`El puerto ${PORT} ya está ocupado. Prueba: $env:PORT=8001; node .\\servidor-local.js`);
  } else {
    console.error("No se pudo iniciar el servidor:", error.message);
  }
  process.exitCode = 1;
});
