// ═══════════════════════════════════════════════════════════
//  ACADEMIA DATA
// ═══════════════════════════════════════════════════════════
const TOPICS = [
  {id:'pensamiento',label:'Pensamiento Computacional',icon:'🧠',color:'#EEEDFE',badge:'Fundamentos',bc:'badge-purple',concepts:[
    {title:'¿Qué es pensar computacionalmente?',body:'Es la capacidad de resolver problemas descomponiendo un desafío grande en partes pequeñas, identificando patrones repetidos y diseñando una solución paso a paso. No depende de ningún lenguaje de programación: es una habilidad mental que aplicas antes de escribir una sola línea de código.',code:'Problema: Sistema de registro estudiantil\n→ Descomponer en partes:\n   1. Registrar un estudiante\n   2. Editar sus datos\n   3. Eliminar un estudiante\n   4. Mostrar la lista completa\n\n→ Identificar patrones:\n   - Todas las acciones operan sobre "un estudiante"\n   - Se repite: leer dato → validar → guardar',tip:'💡 Antes de abrir el editor, escribe en papel los pasos para resolver el problema.',lang:null},
    {title:'Algoritmos',body:'Un algoritmo es una secuencia finita y ordenada de pasos lógicos para resolver un problema. Debe tener un inicio claro, pasos sin ambigüedad y un fin definido. Los algoritmos son independientes del lenguaje: puedes expresarlos en pseudocódigo o diagrama de flujo.',code:'Inicio\n  Leer número1\n  Leer número2\n  resultado ← número1 + número2\n  Mostrar resultado\nFin\n\n// Características de un buen algoritmo:\n// ✓ Tiene inicio y fin\n// ✓ Cada paso es claro\n// ✓ Siempre termina',tip:'💡 Un buen algoritmo es preciso, sin ambigüedades y termina en algún momento.',lang:null},
    {title:'Abstracción y patrones',body:'Abstraer significa quedarse con lo esencial e ignorar los detalles que no importan ahora. Identificar patrones te permite reutilizar soluciones: si resolviste un problema similar antes, aplica el mismo enfoque adaptado.',code:'// Patrón: "recorrer lista y aplicar algo a cada elemento"\n\n// Sumar elementos:\npara cada número en lista:\n    total = total + número\n\n// Filtrar mayores de 18:\npara cada persona en lista:\n    si persona.edad > 18: agregar a resultado\n\n// Mismo patrón → diferente acción interior',tip:'💡 Cuando notes que estás repitiendo código, abstrae: crea una función reutilizable.',lang:null}
  ]},
  {id:'python',label:'Python Básico',icon:'🐍',color:'#E1F5EE',badge:'Python',bc:'badge-teal',concepts:[
    {title:'Tipos de datos',body:'Python maneja cuatro tipos básicos: int (enteros sin decimales), float (números con decimales), str (texto entre comillas) y bool (solo True o False). Cada tipo define qué operaciones puedes aplicar sobre el valor.',code:'entero   = 10\ndecimal  = 3.14\ntexto    = "Hola mundo"\nbooleano = True\n\nprint(type(entero))    # <class \'int\'>\nprint(type(decimal))   # <class \'float\'>\nprint(type(texto))     # <class \'str\'>\nprint(type(booleano))  # <class \'bool\'>',tip:'💡 Usa type() para verificar qué tipo de dato tiene una variable si tienes dudas.',lang:'python'},
    {title:'Operadores lógicos',body:'Los operadores lógicos combinan o evalúan condiciones. "and" requiere que ambas condiciones sean verdaderas. "or" basta con que una lo sea. "not" invierte el valor lógico.',code:'a = 5\nb = 10\n\nprint(a < b)              # True\nprint(a == b)             # False  (igual)\nprint(a != b)             # True   (diferente)\nprint(a > 3 and b < 20)   # True   (ambas verdaderas)\nprint(a > 3 or  b > 100)  # True   (una verdadera)\nprint(not True)           # False',tip:'💡 Práctica: "si tiene_doc AND es_mayor_de_edad → puede ingresar".',lang:'python'},
    {title:'Condicionales',body:'Las estructuras if/elif/else permiten que el programa tome decisiones distintas según la situación. Python usa indentación (4 espacios) para definir qué código pertenece a cada rama.',code:'edad = 20\ntiene_documento = True\n\nif edad >= 18 and tiene_documento:\n    print("Puede ingresar")\nelif edad >= 18 and not tiene_documento:\n    print("Es mayor, pero falta documento")\nelse:\n    print("No está permitido el ingreso")',tip:'💡 Siempre prueba los tres casos: la condición principal, el elif y el else.',lang:'python'},
    {title:'Bucles',body:'Un bucle "for" recorre cada elemento de una colección uno por uno. Un bucle "while" repite mientras una condición sea verdadera.',code:'# Bucle for\nnumeros = [2, 4, 6, 8]\nfor n in numeros:\n    print(n * 2)   # Imprime: 4, 8, 12, 16\n\n# Bucle for con rango\nfor i in range(1, 6):\n    print(i)       # Imprime: 1, 2, 3, 4, 5\n\n# Bucle while\ncontador = 0\nwhile contador < 3:\n    print(contador)\n    contador += 1',tip:'💡 Cuidado con los bucles infinitos: asegúrate de que la condición while pueda volverse False.',lang:'python'},
    {title:'Manejo de errores',body:'Los bloques try/except capturan errores en tiempo de ejecución antes de que el programa se detenga abruptamente.',code:'try:\n    numero = int(input("Ingresa un número: "))\n    resultado = 10 / numero\n    print("Resultado:", resultado)\n\nexcept ZeroDivisionError:\n    print("Error: no puedes dividir entre cero")\n\nexcept ValueError:\n    print("Error: eso no es un número válido")\n\nexcept Exception as e:\n    print("Error inesperado:", e)',tip:'💡 Siempre especifica qué error capturas. Un "except" sin tipo oculta bugs difíciles de encontrar.',lang:'python'}
  ]},
  {id:'estructuras',label:'Estructuras de Datos',icon:'📦',color:'#E6F1FB',badge:'Estructuras',bc:'badge-blue',concepts:[
    {title:'Listas',body:'Una lista es una colección ordenada y mutable de elementos. Puedes agregar, eliminar y acceder a elementos por su índice (que empieza en 0).',code:'numeros = [1, 2, 3, 4]\nnumeros.append(5)       # [1, 2, 3, 4, 5]\nnumeros.remove(2)       # [1, 3, 4, 5]\nnumeros.insert(1, 99)   # [1, 99, 3, 4, 5]\n\nprint(numeros[0])       # 1  (primer elemento)\nprint(numeros[-1])      # 5  (último elemento)\nprint(len(numeros))     # 5  (tamaño)\nprint(numeros[1:3])     # [99, 3]  (slice)',tip:'💡 Las listas son perfectas cuando el orden importa o necesitas duplicados.',lang:'python'},
    {title:'Diccionarios',body:'Un diccionario almacena pares clave:valor. La clave es única y permite acceder al valor directamente en O(1).',code:'usuario = {\n    "nombre": "Carlos",\n    "edad": 22,\n    "activo": True\n}\n\nprint(usuario["nombre"])      # Carlos\nusuario["edad"] = 23          # modificar\nusuario["email"] = "c@x.com"  # agregar\ndel usuario["activo"]         # eliminar\n\nif "nombre" in usuario:\n    print("Tiene nombre")',tip:'💡 Usa diccionarios para representar objetos reales con propiedades.',lang:'python'},
    {title:'Conjuntos (sets)',body:'Un conjunto es una colección sin duplicados y sin orden garantizado.',code:'numeros = {1, 2, 3, 3, 4, 4}\nprint(numeros)   # {1, 2, 3, 4}\n\na = {1, 2, 3}\nb = {2, 3, 4}\n\nprint(a & b)     # {2, 3}       → intersección\nprint(a | b)     # {1, 2, 3, 4} → unión\nprint(a - b)     # {1}          → diferencia\n\nlista = [1,1,2,2,3]\nsin_dup = set(lista)  # {1, 2, 3}',tip:'💡 Convierte una lista con duplicados a set con set(mi_lista) para limpiarla.',lang:'python'}
  ]},
  {id:'poo',label:'POO',icon:'🏗️',color:'#FAEEDA',badge:'Intermedio',bc:'badge-purple',concepts:[
    {title:'Clases y objetos',body:'Una clase es un molde que define qué datos (atributos) y qué acciones (métodos) tiene un tipo de entidad. Un objeto es una instancia concreta de esa clase.',code:'class Estudiante:\n    def __init__(self, nombre, nota):\n        self.nombre = nombre\n        self.nota = nota\n\n    def aprobar(self):\n        return self.nota >= 3\n\n    def __str__(self):\n        return f"{self.nombre} — nota: {self.nota}"\n\ne1 = Estudiante("Ana", 4.5)\ne2 = Estudiante("Luis", 2.8)\n\nprint(e1.aprobar())  # True\nprint(e2.aprobar())  # False\nprint(e1)            # Ana — nota: 4.5',tip:'💡 __init__ es el constructor: se ejecuta automáticamente al crear el objeto.',lang:'python'},
    {title:'Encapsulamiento',body:'El encapsulamiento protege los datos internos de una clase. Los atributos marcados con __ son privados.',code:'class CuentaBancaria:\n    def __init__(self, saldo_inicial):\n        self.__saldo = saldo_inicial\n\n    def depositar(self, monto):\n        if monto > 0:\n            self.__saldo += monto\n\n    def retirar(self, monto):\n        if monto <= self.__saldo:\n            self.__saldo -= monto\n        else:\n            print("Saldo insuficiente")\n\n    def ver_saldo(self):\n        return self.__saldo\n\ncuenta = CuentaBancaria(1000)\ncuenta.depositar(500)\nprint(cuenta.ver_saldo())  # 1500',tip:'💡 Expón solo lo necesario hacia el exterior. Oculta la implementación interna.',lang:'python'},
    {title:'Herencia',body:'La herencia permite que una clase hija reutilice atributos y métodos de una clase padre.',code:'class Persona:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n    def presentarse(self):\n        return f"Soy {self.nombre}, {self.edad} años"\n\nclass Profesor(Persona):\n    def __init__(self, nombre, edad, materia):\n        super().__init__(nombre, edad)\n        self.materia = materia\n    def presentarse(self):\n        base = super().presentarse()\n        return f"{base}, doy {self.materia}"\n\np = Profesor("Marta", 35, "Matemáticas")\nprint(p.presentarse())',tip:'💡 Usa super() para llamar al constructor o métodos de la clase padre sin repetir código.',lang:'python'}
  ]},
  {id:'web',label:'Desarrollo Web',icon:'🌐',color:'#FAECE7',badge:'Web',bc:'badge-teal',concepts:[
    {title:'Arquitectura web',body:'Una aplicación web tiene tres capas: Frontend (HTML, CSS, JS), Backend (lógica del servidor) y Base de datos.',code:'┌─────────────────────────────┐\n│  FRONTEND (Navegador)       │\n│  HTML + CSS + JavaScript    │\n└──────────┬──────────────────┘\n           │  HTTP Request / Response\n┌──────────▼──────────────────┐\n│  BACKEND (Servidor)         │\n│  Python / Node / PHP        │\n└──────────┬──────────────────┘\n           │  Consultas SQL\n┌──────────▼──────────────────┐\n│  BASE DE DATOS              │\n│  MySQL / PostgreSQL         │\n└─────────────────────────────┘',tip:'💡 Antes de construir cualquier app, identifica claramente qué va en cada capa.',lang:null},
    {title:'HTML — estructura',body:'HTML define la estructura y el contenido semántico de una página web.',code:'<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Sistema de Registro</title>\n</head>\n<body>\n  <header>\n    <h1>Registro Estudiantil</h1>\n  </header>\n  <main>\n    <form action="/crear" method="POST">\n      <input type="text" name="nombre" placeholder="Nombre">\n      <input type="number" name="edad" placeholder="Edad">\n      <button type="submit">Registrar</button>\n    </form>\n  </main>\n</body>\n</html>',tip:'💡 Usa etiquetas semánticas (header, main, section, footer) en lugar de divs genéricos.',lang:null},
    {title:'JavaScript — interactividad',body:'JavaScript hace la página dinámica sin recargar.',code:'const form   = document.querySelector("form");\nconst nombre = document.getElementById("nombre");\n\nform.addEventListener("submit", function(e) {\n  e.preventDefault();\n  const valor = nombre.value.trim();\n  if (!valor) {\n    alert("El nombre no puede estar vacío");\n    return;\n  }\n  console.log("Enviado:", valor);\n  nombre.value = "";\n});',tip:'💡 querySelector selecciona el elemento, addEventListener escucha el evento.',lang:null},
    {title:'Flask — servidor Python',body:'Flask es un microframework web en Python para construir APIs REST.',code:'from flask import Flask, request, jsonify\n\napp = Flask(__name__)\nestudiantes = []\n\n@app.route("/")\ndef inicio():\n    return "API de Estudiantes funcionando"\n\n@app.route("/estudiantes", methods=["GET"])\ndef listar():\n    return jsonify(estudiantes)\n\n@app.route("/estudiantes", methods=["POST"])\ndef crear():\n    datos = request.json\n    estudiantes.append(datos)\n    return jsonify({"mensaje": "Creado"}), 201\n\nif __name__ == "__main__":\n    app.run(debug=True)',tip:'💡 Cada @app.route define una URL. methods=["GET","POST"] indica qué verbos HTTP acepta.',lang:'python'}
  ]},
  {id:'bd',label:'Bases de Datos',icon:'🗄️',color:'#EAF3DE',badge:'SQL',bc:'badge-teal',concepts:[
    {title:'¿Qué es una base de datos?',body:'Una base de datos almacena información de forma organizada y persistente.',code:'-- Sistemas reales:\n-- Universidad: estudiantes, materias, notas\n-- Banco: clientes, cuentas, transacciones\n-- Tienda: productos, usuarios, pedidos\n\n-- Motores SQL: MySQL, PostgreSQL, SQLite, Oracle\n-- Motores NoSQL: MongoDB, Redis',tip:'💡 Usa PostgreSQL o MySQL para proyectos; SQLite es perfecto para practicar.',lang:null},
    {title:'CRUD en SQL',body:'CRUD son las cuatro operaciones fundamentales: Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE).',code:'-- CREATE\nINSERT INTO estudiantes (nombre, edad, carrera)\nVALUES ("Ana Ruiz", 19, "Ingeniería");\n\n-- READ\nSELECT * FROM estudiantes WHERE edad > 18;\nSELECT * FROM estudiantes ORDER BY nombre ASC;\n\n-- UPDATE\nUPDATE estudiantes\nSET edad = 20\nWHERE id = 1;\n\n-- DELETE\nDELETE FROM estudiantes WHERE id = 1;',tip:'💡 ¡Nunca hagas UPDATE o DELETE sin WHERE! Afectarás todos los registros.',lang:null},
    {title:'Relaciones y claves foráneas',body:'Las relaciones conectan tablas. Una FOREIGN KEY apunta a la PRIMARY KEY de otra tabla, garantizando integridad referencial.',code:'CREATE TABLE materias (\n    id     INT PRIMARY KEY AUTO_INCREMENT,\n    nombre VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE notas (\n    id            INT PRIMARY KEY AUTO_INCREMENT,\n    estudiante_id INT NOT NULL,\n    materia_id    INT NOT NULL,\n    nota          FLOAT,\n    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id),\n    FOREIGN KEY (materia_id)    REFERENCES materias(id)\n);\n\n-- Consulta con JOIN\nSELECT e.nombre, m.nombre AS materia, n.nota\nFROM notas n\nJOIN estudiantes e ON n.estudiante_id = e.id\nJOIN materias m    ON n.materia_id    = m.id;',tip:'💡 Normaliza tus datos: no repitas información, conéctala con claves foráneas.',lang:null}
  ]},

  // ── C++ ──────────────────────────────────────────────────
  {id:'cpp',label:'C++ Fundamentos',icon:'🔵',color:'#E6F1FB',badge:'C++',bc:'badge-blue',concepts:[
    {title:'Estructura básica y compilación',body:'Un programa C++ comienza con directivas #include para importar librerías. La función main() es el punto de entrada. El compilador g++ transforma el código fuente en un ejecutable. C++ es un lenguaje compilado, tipado estáticamente y de alto rendimiento.',code:'#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    cout << "Hola mundo" << endl;\n\n    string nombre;\n    cout << "¿Tu nombre? ";\n    cin >> nombre;\n    cout << "Hola, " << nombre << "!" << endl;\n\n    return 0;  // 0 = ejecución exitosa\n}\n\n// Compilar:  g++ -o programa main.cpp\n// Ejecutar:  ./programa',tip:'💡 Siempre incluye return 0; al final de main(). Un exit code 0 significa éxito.',lang:'cpp'},
    {title:'Tipos de datos y variables',body:'C++ es de tipado estático: debes declarar el tipo de cada variable antes de usarla. Los tipos básicos son int (entero), double (decimal), char (carácter), bool (verdadero/falso) y string (texto). El tipo determina cuánta memoria ocupa y qué operaciones son válidas.',code:'#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int      edad    = 20;\n    double   nota    = 4.5;\n    char     letra   = \'A\';\n    bool     aprobado = true;\n    string   nombre  = "Carlos";\n\n    cout << "Nombre: " << nombre << endl;\n    cout << "Edad: "   << edad   << endl;\n    cout << "Nota: "   << nota   << endl;\n    cout << "Aprobado: " << (aprobado ? "Sí" : "No") << endl;\n\n    // sizeof: tamaño en bytes\n    cout << "int ocupa: " << sizeof(int) << " bytes" << endl;\n    return 0;\n}',tip:'💡 Usa double en vez de float para mayor precisión decimal.',lang:'cpp'},
    {title:'Operadores y expresiones',body:'C++ tiene operadores aritméticos (+, -, *, /, %), relacionales (==, !=, <, >, <=, >=) y lógicos (&&, ||, !). El operador / entre enteros hace división entera. El operador % devuelve el residuo.',code:'#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 17, b = 5;\n\n    cout << a + b  << endl;  // 22\n    cout << a - b  << endl;  // 12\n    cout << a * b  << endl;  // 85\n    cout << a / b  << endl;  // 3  (división entera)\n    cout << a % b  << endl;  // 2  (residuo)\n\n    // Relacionales\n    cout << (a > b)  << endl;  // 1 = true\n    cout << (a == b) << endl;  // 0 = false\n\n    // Lógicos\n    bool mayor = (a > 10) && (b < 10);\n    cout << mayor << endl;  // 1\n    return 0;\n}',tip:'💡 En C++, true se imprime como 1 y false como 0. Usa boolalpha para ver "true"/"false".',lang:'cpp'},
    {title:'Condicionales y bucles',body:'C++ usa if/else if/else para tomar decisiones. Los bucles for y while repiten código. El bucle for tiene tres partes: inicialización; condición; incremento. break y continue controlan el flujo dentro de bucles.',code:'#include <iostream>\nusing namespace std;\n\nint main() {\n    int nota = 75;\n\n    // Condicional\n    if (nota >= 90)      cout << "A - Excelente" << endl;\n    else if (nota >= 70) cout << "B - Bien"      << endl;\n    else if (nota >= 60) cout << "C - Regular"   << endl;\n    else                 cout << "F - Reprobado" << endl;\n\n    // Bucle for\n    cout << "Pares: ";\n    for (int i = 2; i <= 10; i += 2)\n        cout << i << " ";\n    cout << endl;\n\n    // Bucle while\n    int n = 1;\n    while (n <= 5) {\n        cout << n * n << " ";  // cuadrados\n        n++;\n    }\n    cout << endl;\n    return 0;\n}',tip:'💡 Las llaves {} son opcionales cuando el cuerpo del if/for tiene UNA sola instrucción, pero es mejor siempre usarlas.',lang:'cpp'},
    {title:'Funciones',body:'Las funciones permiten reutilizar código. Se definen indicando el tipo de retorno, el nombre y los parámetros. Si no retorna nada, el tipo es void. C++ permite sobrecarga de funciones: mismo nombre con distintos parámetros.',code:'#include <iostream>\nusing namespace std;\n\n// Declaración (prototipo)\ndouble promedio(double a, double b);\nbool esAprobado(double nota);\n\nint main() {\n    double p = promedio(85.0, 92.0);\n    cout << "Promedio: " << p << endl;\n    cout << (esAprobado(p) ? "Aprobado" : "Reprobado") << endl;\n    return 0;\n}\n\n// Definición\ndouble promedio(double a, double b) {\n    return (a + b) / 2.0;\n}\n\nbool esAprobado(double nota) {\n    return nota >= 60.0;\n}',tip:'💡 Declara las funciones (prototipo) antes de main() y defínelas después para mejor organización.',lang:'cpp'},
    {title:'Arrays y vectores',body:'Un array es una colección de elementos del mismo tipo con tamaño fijo. El vector (librería <vector>) es un array dinámico que puede crecer. Los índices empiezan en 0. Los vectores son preferibles en código moderno porque son más seguros y flexibles.',code:'#include <iostream>\n#include <vector>\n#include <algorithm>  // sort, max_element\nusing namespace std;\n\nint main() {\n    // Array estático (tamaño fijo)\n    int notas[5] = {85, 92, 78, 95, 88};\n    cout << "Primera nota: " << notas[0] << endl;\n\n    // Vector dinámico\n    vector<int> califs = {70, 85, 90, 65, 88};\n    califs.push_back(95);  // agregar\n\n    cout << "Tamaño: " << califs.size() << endl;\n\n    // Recorrer con for-each\n    for (int c : califs)\n        cout << c << " ";\n    cout << endl;\n\n    // Ordenar\n    sort(califs.begin(), califs.end());\n    cout << "Menor: " << califs.front() << endl;\n    cout << "Mayor: " << califs.back()  << endl;\n    return 0;\n}',tip:'💡 Prefiere vector<T> sobre arrays crudos: tiene métodos útiles y no decae a puntero.',lang:'cpp'},
    {title:'Punteros y referencias',body:'Un puntero almacena la dirección de memoria de otra variable. Una referencia es un alias de una variable. Con & obtienes la dirección y con * accedes al valor apuntado. Las referencias son más seguras que los punteros para la mayoría de usos.',code:'#include <iostream>\nusing namespace std;\n\nvoid duplicar(int& n) {   // por referencia\n    n *= 2;\n}\n\nvoid triplicar(int* p) {  // por puntero\n    *p *= 3;\n}\n\nint main() {\n    int x = 10;\n\n    cout << "Valor: "     << x  << endl;  // 10\n    cout << "Dirección: " << &x << endl;  // 0x...\n\n    duplicar(x);\n    cout << "Duplicado: " << x << endl;  // 20\n\n    triplicar(&x);\n    cout << "Triplicado: " << x << endl; // 60\n\n    // Puntero explícito\n    int* ptr = &x;\n    *ptr = 100;\n    cout << "Vía puntero: " << x << endl; // 100\n    return 0;\n}',tip:'💡 Usa referencias (&) en los parámetros de funciones cuando quieras modificar la variable original sin copiarla.',lang:'cpp'},
    {title:'Clases y POO en C++',body:'C++ soporta programación orientada a objetos con clases. Una clase agrupa datos (atributos) y comportamientos (métodos). Los especificadores public y private controlan el acceso. El constructor inicializa el objeto. El destructor libera recursos.',code:'#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Estudiante {\nprivate:\n    string nombre;\n    double nota;\n\npublic:\n    // Constructor\n    Estudiante(string n, double nota) {\n        this->nombre = n;\n        this->nota   = nota;\n    }\n\n    bool aprobado() const {\n        return nota >= 60.0;\n    }\n\n    void mostrar() const {\n        cout << nombre << " — " << nota\n             << " — " << (aprobado() ? "APROBADO" : "REPROBADO")\n             << endl;\n    }\n};\n\nint main() {\n    Estudiante e1("Ana",   95.0);\n    Estudiante e2("Luis",  45.0);\n    e1.mostrar();\n    e2.mostrar();\n    return 0;\n}',tip:'💡 Usa const en los métodos que no modifican el objeto. Ayuda al compilador a optimizar y previene errores.',lang:'cpp'}
  ]},

  // ── JAVA ─────────────────────────────────────────────────
  {id:'java',label:'Java Fundamentos',icon:'☕',color:'#FAEEDA',badge:'Java',bc:'badge-purple',concepts:[
    {title:'Estructura básica y compilación',body:'Java es un lenguaje compilado e interpretado. El código fuente (.java) se compila a bytecode (.class) con javac, y la JVM lo ejecuta con java. Todo el código vive dentro de clases. La clase pública debe llamarse igual que el archivo. El método main es el punto de entrada.',code:'// Archivo: Main.java\npublic class Main {\n\n    public static void main(String[] args) {\n        System.out.println("Hola mundo");\n        System.out.println("Java " + Runtime.version());\n\n        // Leer entrada del usuario\n        java.util.Scanner sc = new java.util.Scanner(System.in);\n        System.out.print("¿Tu nombre? ");\n        String nombre = sc.nextLine();\n        System.out.println("Hola, " + nombre + "!");\n        sc.close();\n    }\n}\n\n// Compilar:  javac Main.java\n// Ejecutar:  java Main',tip:'💡 El archivo debe llamarse exactamente igual que la clase pública (Main.java para public class Main).',lang:'java'},
    {title:'Tipos de datos primitivos',body:'Java tiene 8 tipos primitivos: byte, short, int, long (enteros), float, double (decimales), char (carácter Unicode) y boolean. Los objetos como String son tipos de referencia, no primitivos. Java es fuertemente tipado: no hay conversiones implícitas que puedan causar pérdida de datos.',code:'public class Main {\n    public static void main(String[] args) {\n        int     edad     = 20;\n        long    poblacion = 8_000_000_000L;  // L para long\n        double  nota     = 9.75;\n        float   pi       = 3.14f;            // f para float\n        char    inicial  = \'J\';\n        boolean activo   = true;\n        String  nombre   = "María";          // referencia\n\n        System.out.println("Nombre: "  + nombre);\n        System.out.println("Edad: "    + edad);\n        System.out.println("Nota: "    + nota);\n        System.out.println("Activo: "  + activo);\n\n        // Casting (conversión explícita)\n        int enteroDeDouble = (int) 9.99;  // trunca → 9\n        System.out.println("Truncado: " + enteroDeDouble);\n    }\n}',tip:'💡 Usa int para enteros, double para decimales y String para texto en el 90% de los casos.',lang:'java'},
    {title:'Condicionales y operadores',body:'Java usa if/else if/else y switch para tomar decisiones. Los operadores lógicos son && (and), || (or) y ! (not). El operador ternario ? : permite condiciones cortas en una línea. switch puede usar int, String o enum.',code:'public class Main {\n    public static void main(String[] args) {\n        int nota = 85;\n\n        // if / else if / else\n        String calificacion;\n        if      (nota >= 90) calificacion = "A";\n        else if (nota >= 80) calificacion = "B";\n        else if (nota >= 70) calificacion = "C";\n        else if (nota >= 60) calificacion = "D";\n        else                 calificacion = "F";\n\n        System.out.println("Calificación: " + calificacion);\n\n        // Operador ternario\n        String estado = (nota >= 60) ? "APROBADO" : "REPROBADO";\n        System.out.println(estado);\n\n        // switch con String\n        switch (calificacion) {\n            case "A": System.out.println("Excelente"); break;\n            case "B": System.out.println("Muy bien");  break;\n            default:  System.out.println("Sigue adelante");\n        }\n    }\n}',tip:'💡 No olvides el break en cada case del switch, o la ejecución "cae" al siguiente caso.',lang:'java'},
    {title:'Bucles',body:'Java tiene for, while y do-while. El for-each (for mejorado) simplifica el recorrido de arrays y colecciones. break termina el bucle y continue salta a la siguiente iteración.',code:'public class Main {\n    public static void main(String[] args) {\n        // for clásico\n        System.out.print("Pares: ");\n        for (int i = 2; i <= 10; i += 2)\n            System.out.print(i + " ");\n        System.out.println();\n\n        // while\n        int n = 1;\n        while (n <= 5) {\n            System.out.print(n * n + " ");  // cuadrados\n            n++;\n        }\n        System.out.println();\n\n        // for-each sobre array\n        int[] notas = {85, 92, 78, 95, 88};\n        int suma = 0;\n        for (int nota : notas)\n            suma += nota;\n        System.out.println("Promedio: " + (suma / notas.length));\n\n        // do-while (ejecuta al menos una vez)\n        int x = 10;\n        do {\n            System.out.println("x = " + x);\n            x--;\n        } while (x > 8);\n    }\n}',tip:'💡 Usa el for-each siempre que no necesites el índice. Es más legible y menos propenso a errores.',lang:'java'},
    {title:'Métodos y sobrecarga',body:'En Java, los métodos siempre pertenecen a una clase. Los métodos static se llaman sin instanciar la clase. Java permite sobrecarga: mismo nombre de método con distintos parámetros. Los parámetros primitivos se pasan por valor; los objetos por referencia.',code:'public class Main {\n\n    // Métodos estáticos (accesibles desde main)\n    static double promedio(int a, int b) {\n        return (a + b) / 2.0;\n    }\n\n    // Sobrecarga: misma función, más parámetros\n    static double promedio(int a, int b, int c) {\n        return (a + b + c) / 3.0;\n    }\n\n    static String calificar(double prom) {\n        if (prom >= 90) return "A";\n        if (prom >= 80) return "B";\n        if (prom >= 70) return "C";\n        return "F";\n    }\n\n    public static void main(String[] args) {\n        double p2 = promedio(85, 92);\n        double p3 = promedio(85, 92, 78);\n\n        System.out.println("Promedio 2: " + p2 + " → " + calificar(p2));\n        System.out.println("Promedio 3: " + p3 + " → " + calificar(p3));\n    }\n}',tip:'💡 En main() solo puedes llamar métodos static directamente. Para métodos de instancia, debes crear un objeto primero.',lang:'java'},
    {title:'Arrays y ArrayList',body:'Un array en Java tiene tamaño fijo y se declara con el tipo seguido de []. ArrayList<T> es una lista dinámica de la librería java.util que crece automáticamente. Es el equivalente a list de Python o vector de C++.',code:'import java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Array estático\n        int[] notas = new int[5];\n        notas[0] = 85; notas[1] = 92; notas[2] = 78;\n        System.out.println("Largo: " + notas.length);\n\n        // Array con valores iniciales\n        String[] frutas = {"manzana", "pera", "uva"};\n        for (String f : frutas)\n            System.out.println(f);\n\n        // ArrayList dinámico\n        ArrayList<Integer> lista = new ArrayList<>();\n        lista.add(10);\n        lista.add(20);\n        lista.add(30);\n        lista.remove(Integer.valueOf(20));  // eliminar valor\n        System.out.println("Lista: " + lista);\n        System.out.println("Tamaño: " + lista.size());\n\n        Collections.sort(lista);\n        System.out.println("Ordenada: " + lista);\n    }\n}',tip:'💡 Usa ArrayList<T> cuando no sabes el tamaño de antemano. Usa arrays cuando el tamaño es fijo y conocido.',lang:'java'},
    {title:'Clases y objetos en Java',body:'En Java todo es un objeto (salvo los tipos primitivos). Una clase define atributos y métodos. El encapsulamiento se logra con private + getters/setters. El constructor inicializa el objeto. La palabra this referencia al objeto actual.',code:'public class Main {\n\n    // Clase Estudiante (en producción iría en otro archivo)\n    static class Estudiante {\n        private String nombre;\n        private double nota;\n\n        // Constructor\n        public Estudiante(String nombre, double nota) {\n            this.nombre = nombre;\n            this.nota   = nota;\n        }\n\n        // Getter\n        public String getNombre() { return nombre; }\n        public double getNota()   { return nota;   }\n\n        // Setter con validación\n        public void setNota(double nota) {\n            if (nota >= 0 && nota <= 100)\n                this.nota = nota;\n        }\n\n        public boolean aprobado() { return nota >= 60; }\n\n        @Override\n        public String toString() {\n            return nombre + " | " + nota + " | " +\n                   (aprobado() ? "APROBADO" : "REPROBADO");\n        }\n    }\n\n    public static void main(String[] args) {\n        Estudiante e1 = new Estudiante("Ana",  95.0);\n        Estudiante e2 = new Estudiante("Luis", 45.0);\n        System.out.println(e1);\n        System.out.println(e2);\n        e2.setNota(65.0);  // corregir nota\n        System.out.println("Actualizado: " + e2);\n    }\n}',tip:'💡 Siempre declara atributos private y accede a ellos con getters/setters. Eso es encapsulamiento correcto.',lang:'java'},
    {title:'Herencia e interfaces',body:'La herencia en Java se declara con extends. Una clase solo puede heredar de una clase (herencia simple). Las interfaces (interface) permiten definir contratos que múltiples clases pueden implementar con implements. abstract define clases y métodos que obligan a ser implementados.',code:'public class Main {\n\n    // Clase base (abstracta)\n    static abstract class Figura {\n        String color;\n        Figura(String color) { this.color = color; }\n        abstract double area();  // cada figura calcula su área\n        void describir() {\n            System.out.println(color + " — Área: " + area());\n        }\n    }\n\n    // Clases concretas\n    static class Circulo extends Figura {\n        double radio;\n        Circulo(String color, double radio) {\n            super(color);\n            this.radio = radio;\n        }\n        @Override\n        double area() { return Math.PI * radio * radio; }\n    }\n\n    static class Rectangulo extends Figura {\n        double ancho, alto;\n        Rectangulo(String color, double ancho, double alto) {\n            super(color);\n            this.ancho = ancho; this.alto = alto;\n        }\n        @Override\n        double area() { return ancho * alto; }\n    }\n\n    public static void main(String[] args) {\n        Figura[] figuras = {\n            new Circulo("Rojo", 5),\n            new Rectangulo("Azul", 4, 6)\n        };\n        for (Figura f : figuras) f.describir();\n    }\n}',tip:'💡 @Override es opcional pero recomendable: si escribes mal el nombre del método, el compilador te avisa.',lang:'java'},
    {title:'Manejo de excepciones',body:'Java usa try/catch/finally para manejar errores en tiempo de ejecución. Las excepciones son objetos que heredan de Exception. Puedes lanzar tus propias excepciones con throw. El bloque finally siempre se ejecuta, aunque haya error (útil para cerrar recursos).',code:'import java.util.Scanner;\n\npublic class Main {\n\n    // Excepción personalizada\n    static class NotaInvalidaException extends Exception {\n        NotaInvalidaException(String msg) { super(msg); }\n    }\n\n    static void registrarNota(double nota) throws NotaInvalidaException {\n        if (nota < 0 || nota > 100)\n            throw new NotaInvalidaException("Nota fuera de rango: " + nota);\n        System.out.println("Nota registrada: " + nota);\n    }\n\n    public static void main(String[] args) {\n        // try-catch-finally\n        try {\n            registrarNota(85.0);   // OK\n            registrarNota(110.0);  // lanza excepción\n        } catch (NotaInvalidaException e) {\n            System.out.println("Error: " + e.getMessage());\n        } catch (Exception e) {\n            System.out.println("Error genérico: " + e.getMessage());\n        } finally {\n            System.out.println("Bloque finally: siempre se ejecuta");\n        }\n\n        // NumberFormatException\n        try {\n            int n = Integer.parseInt("abc");\n        } catch (NumberFormatException e) {\n            System.out.println("No es un número válido");\n        }\n    }\n}',tip:'💡 Captura la excepción más específica primero. Nunca captures Exception genérica para ocultar errores reales.',lang:'java'}
  ]}
];
if(Array.isArray(window.EXTRA_TOPICS)) TOPICS.push(...window.EXTRA_TOPICS);

const QUIZZES = {
  pensamiento:[
    {q:'¿Cuál es el primer paso del pensamiento computacional?',opts:['Escribir el código directamente','Descomponer el problema en partes pequeñas','Elegir el lenguaje de programación','Instalar un editor de código'],ans:1,exp:'El primer paso es descomponer: dividir el problema grande en partes manejables antes de pensar en código o lenguaje.'},
    {q:'¿Qué es un algoritmo?',opts:['Un tipo de variable especial','Un lenguaje de programación avanzado','Una secuencia finita de pasos lógicos para resolver un problema','Un archivo de código ejecutable'],ans:2,exp:'Un algoritmo es una secuencia ordenada y finita de pasos sin ambigüedad que resuelve un problema determinado.'},
    {q:'¿Qué significa "abstraer" en programación?',opts:['Copiar código de internet','Quedarse con lo esencial e ignorar detalles irrelevantes','Escribir código muy complejo','Depurar errores del programa'],ans:1,exp:'Abstraer es identificar lo importante y dejar de lado los detalles que no afectan la solución actual.'},
    {q:'Un pseudocódigo sirve principalmente para...',opts:['Ejecutarse directamente en el computador','Planificar la lógica del programa sin depender de un lenguaje','Diseñar interfaces gráficas','Crear bases de datos'],ans:1,exp:'El pseudocódigo describe la lógica de forma independiente al lenguaje. Ayuda a pensar antes de escribir código real.'}
  ],
  python:[
    {q:'¿Qué tipo de dato es el valor 3.14 en Python?',opts:['int','str','float','bool'],ans:2,exp:'3.14 tiene decimales, por lo tanto es de tipo float (número de punto flotante).'},
    {q:'¿Qué imprime este código?\n\na = 5\nb = 10\nprint(a == b)',opts:['5','10','True','False'],ans:3,exp:'a == b compara si son iguales. Como 5 ≠ 10, el resultado es False.'},
    {q:'¿Cuántas veces imprime "hola" este bucle?\n\nfor i in [1, 2, 3]:\n    print("hola")',opts:['1 vez','2 veces','3 veces','0 veces'],ans:2,exp:'El bucle recorre los 3 elementos, así que imprime "hola" exactamente 3 veces.'},
    {q:'¿Qué excepción captura el error cuando el usuario escribe texto en lugar de número?',opts:['ZeroDivisionError','ValueError','TypeError','NameError'],ans:1,exp:'ValueError se lanza cuando int() recibe un valor que no puede convertir a número.'},
    {q:'¿Cuál es el operador "Y" lógico correcto en Python?',opts:['&&','and','&','AND'],ans:1,exp:'Python usa la palabra reservada "and" (minúscula) como operador lógico Y.'}
  ],
  estructuras:[
    {q:'¿Cuál es el índice del primer elemento de una lista en Python?',opts:['1','0','-1','No tiene índice'],ans:1,exp:'Python usa indexación base cero: el primer elemento está en el índice 0.'},
    {q:'¿Qué método agrega un elemento al final de una lista?',opts:['add()','insert()','append()','push()'],ans:2,exp:'append() agrega al final de la lista. insert(i, v) requiere especificar la posición.'},
    {q:'¿Qué estructura de datos elimina duplicados automáticamente?',opts:['Lista','Diccionario','Tupla','Conjunto (set)'],ans:3,exp:'Un set (conjunto) no permite elementos duplicados.'},
    {q:'¿Cómo se accede al valor "Carlos"?\n\nd = {"nombre": "Carlos"}',opts:['d[0]','d.Carlos','d["nombre"]','d.get(0)'],ans:2,exp:'En los diccionarios se accede por clave: d["nombre"] devuelve "Carlos".'}
  ],
  poo:[
    {q:'¿Qué es una clase en POO?',opts:['Una variable global del programa','Un molde que define atributos y métodos de un objeto','Un tipo especial de bucle','Una función con parámetros'],ans:1,exp:'Una clase es la plantilla que describe qué datos (atributos) y comportamientos (métodos) tendrá cada objeto.'},
    {q:'¿Qué hace el método __init__ en una clase Python?',opts:['Imprime el objeto en pantalla','Elimina el objeto de memoria','Inicializa y configura el objeto al crearlo','Copia el objeto a otro'],ans:2,exp:'__init__ es el constructor: se ejecuta automáticamente al hacer Clase() y configura los atributos iniciales.'},
    {q:'¿Qué concepto permite que una clase hija reutilice el código de la clase padre?',opts:['Polimorfismo','Abstracción','Encapsulamiento','Herencia'],ans:3,exp:'La herencia permite que una clase hija extienda o reutilice los atributos y métodos de su clase padre.'},
    {q:'¿Para qué sirve super() dentro de una clase hija?',opts:['Para crear una copia del objeto','Para llamar métodos o el constructor de la clase padre','Para eliminar un atributo','Para comparar dos objetos'],ans:1,exp:'super() llama al constructor o método de la clase padre, evitando repetir código en la herencia.'}
  ],
  web:[
    {q:'¿Cuál es la responsabilidad del Frontend en una aplicación web?',opts:['Gestionar la base de datos','Aplicar la lógica de negocio','Mostrar la interfaz que el usuario ve e interactúa','Autenticar y autorizar usuarios'],ans:2,exp:'El Frontend (HTML + CSS + JS) es la capa de presentación que corre en el navegador del usuario.'},
    {q:'¿Qué lenguaje da estilos y diseño visual a una página web?',opts:['HTML','JavaScript','CSS','SQL'],ans:2,exp:'CSS (Cascading Style Sheets) controla colores, fuentes, espaciado y la disposición visual.'},
    {q:'¿Qué hace addEventListener en JavaScript?',opts:['Selecciona un elemento del DOM','Escucha eventos del usuario y ejecuta una función al ocurrir','Crea un nuevo elemento HTML','Envía datos al servidor'],ans:1,exp:'addEventListener registra una función que se ejecuta cuando ocurre un evento.'},
    {q:'En Flask, ¿qué hace el decorador @app.route("/")?',opts:['Define una variable global','Importa una librería','Asocia una función Python a una URL del servidor','Conecta Flask a la base de datos'],ans:2,exp:'@app.route define qué función Python responde cuando el navegador hace una petición a esa URL.'}
  ],
  bd:[
    {q:'¿Qué significa PRIMARY KEY en una tabla SQL?',opts:['Una columna opcional','El identificador único e irrepetible de cada fila','La primera columna que se define','Un índice de búsqueda rápida'],ans:1,exp:'PRIMARY KEY garantiza que cada fila tenga un valor único, identificando registros sin ambigüedad.'},
    {q:'¿Cuál es el comando SQL para leer/consultar datos?',opts:['INSERT','UPDATE','SELECT','CREATE'],ans:2,exp:'SELECT es el comando de lectura. Filtra con WHERE, ordena con ORDER BY.'},
    {q:'¿Qué ocurre si haces UPDATE sin cláusula WHERE?',opts:['Actualiza solo el primer registro','Genera un error de sintaxis','Actualiza TODOS los registros de la tabla','No hace nada'],ans:2,exp:'Sin WHERE, UPDATE (y DELETE) afectan TODAS las filas de la tabla.'},
    {q:'¿Qué significa CRUD en desarrollo web?',opts:['Create, Run, Update, Deploy','Create, Read, Update, Delete','Copy, Read, Use, Delete','Create, Read, Upload, Delete'],ans:1,exp:'CRUD: Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE).'},
    {q:'¿Para qué sirve una FOREIGN KEY en SQL?',opts:['Para cifrar datos sensibles','Para acelerar búsquedas','Para relacionar tablas garantizando integridad referencial','Para crear índices automáticamente'],ans:2,exp:'FOREIGN KEY relaciona dos tablas y garantiza integridad referencial.'}
  ],

  cpp:[
    {q:'¿Cuál es el punto de entrada de un programa C++?',opts:['void start()','public static void main','int main()','function main()'],ans:2,exp:'En C++, la función int main() es siempre el punto de entrada. Retorna un int donde 0 significa éxito.'},
    {q:'¿Cuál es la diferencia entre int a = 7/2 y double b = 7.0/2?',opts:['No hay diferencia','a vale 3 y b vale 3.5','a vale 3.5 y b vale 3','Ambos valen 3.5'],ans:1,exp:'La división entre enteros (7/2) produce un resultado entero truncado: 3. Con al menos un double (7.0/2) el resultado es 3.5.'},
    {q:'¿Qué hace el operador & al aplicarse a una variable?',opts:['Multiplica por 2','Obtiene la dirección de memoria de la variable','Declara una referencia','Aplica AND lógico a todos los bits'],ans:1,exp:'El operador & aplicado a una variable devuelve su dirección de memoria. Es la base de los punteros y referencias en C++.'},
    {q:'¿Cuál es la diferencia principal entre un array y un vector<T>?',opts:['No hay diferencia real','El array puede cambiar de tamaño, el vector no','El vector tiene tamaño dinámico; el array tiene tamaño fijo','Los vectores son solo para int'],ans:2,exp:'vector<T> es un contenedor dinámico que puede crecer con push_back(). Un array tiene tamaño fijo definido en tiempo de compilación.'},
    {q:'¿Para qué sirve la palabra clave private en una clase C++?',opts:['Para hacer la clase más rápida','Para que los atributos no sean accesibles desde fuera de la clase','Para declarar métodos estáticos','Para heredar de otra clase'],ans:1,exp:'private restringe el acceso a atributos y métodos: solo el código dentro de la misma clase puede acceder a ellos. Esto es encapsulamiento.'},
    {q:'¿Qué imprime este código?\n\nint x = 5;\nint& ref = x;\nref = 20;\ncout << x;',opts:['5','20','Error de compilación','Indefinido'],ans:1,exp:'ref es una referencia a x: son el mismo objeto con dos nombres. Modificar ref modifica x directamente, así que se imprime 20.'},
    {q:'¿Cuál es la cabecera correcta para usar vector en C++?',opts:['#include <array>','#include <list>','#include <vector>','#include <collection>'],ans:2,exp:'La clase vector pertenece a la librería estándar de C++ y se incluye con #include <vector>.'},
    {q:'¿Qué significa using namespace std; en C++?',opts:['Importa todas las librerías de C++','Permite usar nombres de std:: sin prefijo (cout en vez de std::cout)','Declara un espacio de nombres propio','Habilita funciones matemáticas'],ans:1,exp:'Sin using namespace std, deberías escribir std::cout, std::endl, etc. La directiva evita el prefijo std:: para mayor comodidad.'}
  ],

  java:[
    {q:'¿Cuál es el resultado de compilar un archivo .java con javac?',opts:['Un archivo ejecutable binario','Un archivo .class con bytecode','Un archivo .jar directamente','Un archivo .exe'],ans:1,exp:'javac compila el código fuente .java a bytecode (.class). Luego la JVM ejecuta ese bytecode con java, lo que hace Java multiplataforma.'},
    {q:'¿Qué tipo de dato debes usar en Java para almacenar un texto como "Hola mundo"?',opts:['char','char[]','String','text'],ans:2,exp:'String es el tipo de referencia en Java para almacenar texto. char solo almacena un único carácter.'},
    {q:'¿Por qué es obligatorio el break en los casos de un switch en Java?',opts:['Para mejorar el rendimiento','Sin break, la ejecución "cae" al siguiente case automáticamente','Es solo una convención de estilo','No es necesario en Java moderno'],ans:1,exp:'Sin break, Java continúa ejecutando los cases siguientes (fall-through). Esto provoca comportamientos inesperados salvo que sea intencional.'},
    {q:'¿Cuál es la diferencia entre un array y un ArrayList en Java?',opts:['No hay diferencia','El array tiene tamaño fijo; ArrayList es dinámico y puede crecer','ArrayList es más rápido siempre','Los arrays pueden guardar objetos; ArrayList solo primitivos'],ans:1,exp:'Un array tiene longitud fija definida al crearlo. ArrayList<T> crece dinámicamente con add() y tiene métodos como size(), remove() y contains().'},
    {q:'¿Qué hace la anotación @Override en Java?',opts:['Crea un nuevo método','Indica que el método reemplaza uno de la clase padre y pide al compilador verificarlo','Hace el método privado','Impide que la clase sea heredada'],ans:1,exp:'@Override le dice al compilador "este método sobreescribe uno de la clase padre". Si el nombre está mal, el compilador genera un error, evitando bugs silenciosos.'},
    {q:'¿Cuál es el propósito del bloque finally en try/catch/finally?',opts:['Solo se ejecuta si no hay excepción','Solo se ejecuta si hay excepción','Siempre se ejecuta, haya o no excepción','Es equivalente a un segundo catch'],ans:2,exp:'El bloque finally se ejecuta siempre, sin importar si el try tuvo éxito o si catch capturó una excepción. Ideal para cerrar conexiones y archivos.'},
    {q:'¿Qué significa que Java tiene herencia simple?',opts:['Una clase solo puede tener un atributo','Una clase solo puede heredar de UNA clase padre (no de varias)','Solo se pueden crear una instancia por clase','Los métodos solo pueden tener un parámetro'],ans:1,exp:'A diferencia de C++, en Java una clase solo puede extender (extends) una clase. Para múltiples comportamientos se usan interfaces (implements).'},
    {q:'¿Cuál es la diferencia entre == y .equals() para comparar Strings en Java?',opts:['No hay diferencia','== compara el contenido; .equals() compara la referencia','== compara la referencia de memoria; .equals() compara el contenido','Ambas comparan el contenido'],ans:2,exp:'== compara si dos variables apuntan al mismo objeto en memoria. .equals() compara el contenido del texto. Para Strings, siempre usa .equals() para comparar texto.'},
    {q:'¿Qué hace this en Java dentro de un método de instancia?',opts:['Llama al constructor de la clase padre','Referencia al objeto actual (la instancia que ejecuta el método)','Crea una copia del objeto','Hace el método estático'],ans:1,exp:'this es una referencia al objeto actual. Se usa para distinguir atributos del objeto (this.nombre) de parámetros del método (nombre) cuando tienen el mismo nombre.'}
  ]
};
if(Array.isArray(window.SYNTAX_QUIZ)) QUIZZES.sintaxis=window.SYNTAX_QUIZ;

// ═══════════════════════════════════════════════════════════
//  ACADEMIA STATE & FUNCTIONS
// ═══════════════════════════════════════════════════════════
let currentTopic=null,currentConceptIdx=0;
let quizTopic=null,quizIdx=0,quizScore=0,quizAnswered=false,quizQuestions=[],quizMissed=[];
let selectedGlosItem=-1;
const LEARNING_KEY='academia_learning_v1';
function loadLearningProgress(){
  try{const saved=JSON.parse(localStorage.getItem(LEARNING_KEY)||'{}');return{seen:Array.isArray(saved.seen)?saved.seen:[],quizzes:saved.quizzes&&typeof saved.quizzes==='object'?saved.quizzes:{},last:saved.last&&typeof saved.last.topic==='string'?saved.last:null};}catch(error){return{seen:[],quizzes:{},last:null};}
}
let learningProgress=loadLearningProgress();
function persistLearningProgress(){try{localStorage.setItem(LEARNING_KEY,JSON.stringify(learningProgress));}catch(error){showToast('No se pudo guardar tu progreso en este navegador');}renderLearningDashboard();}
function renderLearningDashboard(){
  const total=TOPICS.reduce((n,t)=>n+t.concepts.length,0),seen=learningProgress.seen.length;
  const quizzes=Object.values(learningProgress.quizzes).reduce((n,q)=>n+(q.attempts||0),0),pct=total?Math.round(seen/total*100):0;
  document.getElementById('progress-lessons').textContent=`${seen}/${total}`;
  document.getElementById('progress-quizzes').textContent=quizzes;
  document.getElementById('progress-summary').textContent=seen?`Llevas ${pct}% del recorrido. Cada concepto que visitas queda guardado en este dispositivo.`:'Explora los temas, practica y sigue tu avance desde este dispositivo.';
  document.getElementById('learning-progress-bar').style.width=pct+'%';
  document.querySelector('.progress-track').setAttribute('aria-valuenow',pct);
  const button=document.getElementById('continue-learning');
  if(learningProgress.last&&TOPICS.some(t=>t.id===learningProgress.last.topic)){button.disabled=false;button.textContent='Continuar aprendiendo →';}
}
function continueLearning(){const last=learningProgress.last;if(last&&TOPICS.some(t=>t.id===last.topic)){selectTopic(last.topic);currentConceptIdx=Math.min(last.concept||0,currentTopic.concepts.length-1);renderConcept();}else selectTopic(TOPICS[0].id);}

function showScreen(id,btn){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('s-'+id).classList.add('active');
  btn.classList.add('active');
  if(id==='compiler') initIDE();
}

function renderTopics(){
  document.getElementById('topic-grid').innerHTML=TOPICS.map(t=>`
    <div class="topic-card" id="tc-${t.id}" onclick="selectTopic('${t.id}')">
      <div class="topic-icon" style="background:${t.color}">${t.icon}</div>
      <div class="topic-name">${t.label}</div>
      <div class="topic-count">${t.concepts.length} conceptos</div>
      <div class="topic-progress"><span style="width:${Math.round(t.concepts.filter((_,i)=>learningProgress.seen.includes(t.id+':'+i)).length/t.concepts.length*100)}%"></span></div>
    </div>`).join('');
}

function selectTopic(id){
  currentTopic=TOPICS.find(t=>t.id===id);currentConceptIdx=0;
  document.querySelectorAll('.topic-card').forEach(c=>c.classList.remove('selected'));
  document.getElementById('tc-'+id).classList.add('selected');
  document.getElementById('concept-area').style.display='block';
  renderConceptPills();renderConcept();
  document.getElementById('concept-area').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function renderConceptPills(){
  document.getElementById('concept-pills').innerHTML=currentTopic.concepts.map((c,i)=>`
    <button class="pill-btn ${i===currentConceptIdx?'active':''}" onclick="goToConcept(${i})">
      ${i+1}. ${c.title.split(' ').slice(0,3).join(' ')}…
    </button>`).join('');
}

function renderConcept(){
  const c=currentTopic.concepts[currentConceptIdx];
  const key=currentTopic.id+':'+currentConceptIdx;
  if(!learningProgress.seen.includes(key)){learningProgress.seen.push(key);}
  learningProgress.last={topic:currentTopic.id,concept:currentConceptIdx};
  try{localStorage.setItem(LEARNING_KEY,JSON.stringify(learningProgress));}catch(error){}
  renderLearningDashboard();
  renderTopics();
  document.getElementById('c-title').textContent=c.title;
  document.getElementById('c-badge').textContent=currentTopic.badge;
  document.getElementById('c-badge').className='badge '+currentTopic.bc;
  document.getElementById('c-body').textContent=c.body;
  document.getElementById('c-detail').textContent=getConceptExplanation(currentTopic.id,c.title);
  document.getElementById('c-code').textContent=c.code;
  document.getElementById('c-tip').textContent=c.tip;
  renderTopicRoadmap();
  renderChallenge();
  document.getElementById('prev-btn').disabled=currentConceptIdx===0;
  document.getElementById('next-btn').disabled=currentConceptIdx===currentTopic.concepts.length-1;
  renderConceptPills();
}

function renderTopicRoadmap(){
  const guide=window.TOPIC_GUIDE?.[currentTopic.id];
  if(!guide)return;
  const completed=currentTopic.concepts.filter((_,i)=>learningProgress.seen.includes(currentTopic.id+':'+i)).length;
  const prereq=guide.prerequisite?`Recomendado antes: ${guide.prerequisite}`:'Punto de partida';
  document.getElementById('topic-roadmap').innerHTML=`<div><div class="topic-roadmap-title">Ruta ${guide.order} · ${escapeHTML(currentTopic.label)} <span class="roadmap-level">Nivel ${escapeHTML(guide.level)}</span></div><div class="topic-roadmap-copy">${escapeHTML(guide.objective)}<br><small>${escapeHTML(prereq)}</small></div></div><div class="topic-roadmap-progress">Paso ${currentConceptIdx+1} de ${currentTopic.concepts.length} · ${completed} completados</div>`;
}

function renderChallenge(){
  const isJavaScriptChallenge=currentTopic.id==='sintaxis'&&currentTopic.concepts[currentConceptIdx]?.title==='Sintaxis de JavaScript';
  const challenge=(window.PRACTICE_CHALLENGES?.[isJavaScriptChallenge?'javascript':currentTopic.id]||[])[isJavaScriptChallenge?0:currentConceptIdx];
  const panel=document.getElementById('practice-panel');
  if(!challenge){panel.hidden=true;return;}
  panel.hidden=false;panel.dataset.topic=currentTopic.id;panel.dataset.index=String(currentConceptIdx);
  document.getElementById('challenge-title').textContent=challenge.title;
  document.getElementById('challenge-language').textContent=isJavaScriptChallenge?'JavaScript':'Python';
  document.getElementById('challenge-prompt').textContent=challenge.prompt;
  document.getElementById('challenge-cases').innerHTML=challenge.cases.map(item=>`<li>${escapeHTML(item)}</li>`).join('');
  document.getElementById('challenge-editor').value=challenge.starter;
  document.getElementById('challenge-hints').hidden=true;
  document.getElementById('challenge-hints').textContent='';
  document.getElementById('challenge-result').textContent='';
}
function toggleChallengeHints(){
  const isJavaScriptChallenge=currentTopic?.id==='sintaxis'&&currentTopic.concepts[currentConceptIdx]?.title==='Sintaxis de JavaScript';
  const challenge=(window.PRACTICE_CHALLENGES?.[isJavaScriptChallenge?'javascript':currentTopic?.id]||[])[isJavaScriptChallenge?0:currentConceptIdx];if(!challenge)return;
  const box=document.getElementById('challenge-hints');box.hidden=!box.hidden;box.innerHTML=challenge.hints.map((hint,i)=>`<div><b>Pista ${i+1}:</b> ${escapeHTML(hint)}</div>`).join('');
}
function resetChallenge(){renderChallenge();}
async function runChallenge(){
  const isJavaScriptChallenge=currentTopic?.id==='sintaxis'&&currentTopic.concepts[currentConceptIdx]?.title==='Sintaxis de JavaScript';
  const challenge=(window.PRACTICE_CHALLENGES?.[isJavaScriptChallenge?'javascript':currentTopic?.id]||[])[isJavaScriptChallenge?0:currentConceptIdx];if(!challenge)return;
  const output=document.getElementById('challenge-result');output.className='challenge-result';output.textContent='Ejecutando pruebas…';
  try{
    if(isJavaScriptChallenge){
      const result=await executeJavaScript(document.getElementById('challenge-editor').value+'\n'+challenge.tests,[]);
      if(result.exitCode!==0)throw new Error(result.stderr||'Falló una prueba.');
      output.classList.add('ok');output.textContent=result.stdout||'¡Reto superado!';
    }else{
      const result=await runRealPython(document.getElementById('challenge-editor').value+'\n\n'+challenge.tests,[]);
      if(result.exitCode!==0)throw new Error(result.stderr||'Falló una prueba.');
      output.classList.add('ok');output.textContent=result.stdout||'¡Reto superado!';
    }
  }catch(error){output.classList.add('error');output.textContent='Todavía no pasa las pruebas.\n'+error.message;}
}

function goToConcept(i){currentConceptIdx=i;renderConcept();}
function prevConcept(){if(currentConceptIdx>0){currentConceptIdx--;renderConcept();}}
function nextConcept(){if(currentTopic&&currentConceptIdx<currentTopic.concepts.length-1){currentConceptIdx++;renderConcept();}}

function tryCodeInCompiler(){
  if(!currentTopic) return;
  const c=currentTopic.concepts[currentConceptIdx];
  const syntaxLanguage={'Sintaxis de JavaScript':'javascript','Sintaxis de C':'c','Sintaxis de C#':'csharp'}[c.title];
  const lang=LANG_META[c.lang]?c.lang:syntaxLanguage;
  if(!LANG_META[lang]){showToast('Este ejemplo es de marcado o estilos y no se ejecuta como un programa en la consola.');return;}
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('s-compiler').classList.add('active');
  document.querySelectorAll('.nav-btn')[3].classList.add('active');
  initIDE();
  setTimeout(()=>{
    document.getElementById('lang-select').value=lang;
    changeLang(false);
    setEditorCode(c.code);
  },100);
}

function goQuizFromLearn(){
  if(!currentTopic) return;
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('s-quiz').classList.add('active');
  document.querySelectorAll('.nav-btn')[1].classList.add('active');
  startQuiz(currentTopic.id);
  window.scrollTo({top:0,behavior:'smooth'});
}

// QUIZ
function renderQuizTopicBtns(){
  document.getElementById('quiz-topic-bar').innerHTML=TOPICS.map(t=>`
    <button class="qtopic-btn ${quizTopic===t.id?'active':''}" onclick="startQuiz('${t.id}')">${t.icon} ${t.label}</button>`).join('');
}
function startQuiz(id){
  quizTopic=id;quizIdx=0;quizScore=0;quizAnswered=false;quizMissed=[];
  quizQuestions=(QUIZZES[id]||[]).map(q=>{const order=q.opts.map((_,i)=>i);for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}return{...q,opts:order.map(i=>q.opts[i]),ans:order.indexOf(q.ans)};});
  for(let i=quizQuestions.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[quizQuestions[i],quizQuestions[j]]=[quizQuestions[j],quizQuestions[i]];}
  renderQuizTopicBtns();renderQuestion();
}

function renderQuestion(){
  const qs=quizQuestions;
  if(quizIdx>=qs.length){renderScore();return;}
  const q=qs[quizIdx];quizAnswered=false;
  const dots=qs.map((_,i)=>`<div class="prog-seg ${i<quizIdx?'done':i===quizIdx?'active':''}"></div>`).join('');
  const hasCode=q.q.includes('\n');
  const qHTML=hasCode?`<div class="quiz-code">${q.q}</div>`:`<div class="quiz-question">${q.q}</div>`;
  document.getElementById('quiz-area').innerHTML=`
    <div class="quiz-card">
      <div class="progress-bar">${dots}</div>
      <div class="quiz-meta">Pregunta ${quizIdx+1} de ${qs.length} · ${TOPICS.find(t=>t.id===quizTopic).label}</div>
      ${qHTML}
      <div class="options">${q.opts.map((o,i)=>`<button class="opt" id="opt-${i}" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div>
      <div id="feedback-area"></div>
    </div>`;
}

function answerQuiz(i){
  if(quizAnswered)return;quizAnswered=true;
  const q=quizQuestions[quizIdx];const ok=i===q.ans;
  if(ok)quizScore++;
  else quizMissed.push(q);
  document.querySelectorAll('.opt').forEach(b=>b.disabled=true);
  document.getElementById('opt-'+i).classList.add(ok?'correct':'wrong');
  if(!ok)document.getElementById('opt-'+q.ans).classList.add('correct');
  document.getElementById('feedback-area').innerHTML=`
    <div class="feedback ${ok?'ok':'ko'}">${ok?'✓ Correcto — ':'✗ Incorrecto — '}${q.exp}</div>
    <button class="btn btn-primary" onclick="nextQuestion()" style="margin-top:.75rem">
      ${quizIdx<quizQuestions.length-1?'Siguiente pregunta →':'Ver resultados →'}
    </button>`;
}

function nextQuestion(){quizIdx++;renderQuestion();}

function renderScore(){
  const qs=quizQuestions;const pct=Math.round(quizScore/qs.length*100);
  const previous=learningProgress.quizzes[quizTopic]||{attempts:0,best:0};
  learningProgress.quizzes[quizTopic]={attempts:previous.attempts+1,best:Math.max(previous.best,pct),last:pct};
  persistLearningProgress();
  const m=pct===100?'🏆':pct>=75?'⭐':pct>=50?'📈':'📚';
  const msg=pct===100?'¡Perfecto! Dominas completamente este tema.':pct>=75?'¡Excelente! Repasa los conceptos donde fallaste.':pct>=50?'Buen intento. Repasa las lecciones de este tema.':'Sigue practicando. La constancia es la clave del aprendizaje.';
  document.getElementById('quiz-area').innerHTML=`
    <div class="quiz-card"><div class="score-box">
      <div class="score-medal">${m}</div>
      <div class="score-pct">${pct}%</div>
      <div class="score-msg">${msg}</div>
      <div class="score-stats">
        <div class="stat-pill"><div class="stat-n" style="color:var(--primary)">${quizScore}</div><div class="stat-l">Correctas</div></div>
        <div class="stat-pill"><div class="stat-n" style="color:var(--red)">${qs.length-quizScore}</div><div class="stat-l">Incorrectas</div></div>
        <div class="stat-pill"><div class="stat-n">${qs.length}</div><div class="stat-l">Total</div></div>
      </div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn" onclick="startQuiz('${quizTopic}')">🔄 Repetir quiz</button>
        ${quizMissed.length?'<button class="btn" onclick="showQuizReview()">🧠 Repasar errores</button>':''}
        <button class="btn btn-primary" onclick="goLearnTopic('${quizTopic}')">📖 Repasar lecciones</button>
      </div>
    </div></div>`;
}

function showQuizReview(){
  const items=quizMissed.map(q=>`<article class="review-item"><h3>${escapeHTML(q.q)}</h3><p>${escapeHTML(q.exp)}</p></article>`).join('');
  document.getElementById('quiz-area').innerHTML=`<div class="quiz-card"><h2>Repaso de respuestas</h2><p>Lee la explicación y vuelve a intentar el cuestionario cuando quieras.</p>${items}<button class="btn btn-primary" onclick="startQuiz('${quizTopic}')">Volver a intentarlo</button></div>`;
}

function goLearnTopic(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('s-learn').classList.add('active');
  document.querySelectorAll('.nav-btn')[0].classList.add('active');
  selectTopic(id);window.scrollTo({top:0,behavior:'smooth'});
}

// GLOSARIO
const ALL_CONCEPTS=TOPICS.flatMap(t=>t.concepts.map(c=>({...c,topicId:t.id,topicLabel:t.label,topicBadge:t.badge,topicBc:t.bc})));

// Explicaciones ampliadas para profundizar el contenido en lecciones y glosario.
const CONCEPT_EXPLANATIONS={
  'pensamiento|¿Qué es pensar computacionalmente?':'Pensar computacionalmente convierte una situación real en un problema que puede resolverse mediante instrucciones claras. Primero se identifica el objetivo y los datos disponibles; después se separa el problema en partes manejables, se reconocen tareas repetidas y se eligen los detalles importantes.\n\nPor ejemplo, una aplicación de matrículas necesita registrar estudiantes, validar sus datos y mostrar resultados. Resolver cada responsabilidad por separado facilita encontrar errores y cambiar una parte sin rehacer todo. Esta manera de pensar también sirve al organizar una receta, planear una ruta o analizar información: no es exclusiva de quienes programan.',
  'pensamiento|Algoritmos':'Un algoritmo describe una solución como una serie de instrucciones que otra persona o una computadora puede seguir. Para que sea útil, cada paso debe ser preciso, el orden debe tener sentido y el proceso debe terminar para las entradas previstas. Una receta ambigua como “cocina hasta que esté listo” es menos reproducible que una que indica temperatura y duración.\n\nAntes de escribir código, identifica las entradas, las transformaciones y las salidas. Luego comprueba el algoritmo con casos normales, valores límite y datos inesperados. Un mismo algoritmo puede traducirse a Python, C++ o Java, porque la lógica y el lenguaje son cosas distintas.',
  'pensamiento|Abstracción y patrones':'La abstracción ayuda a concentrarse en las propiedades que importan para una tarea. Si se calcula el promedio de estudiantes, interesan sus notas, pero probablemente no el color de su mochila. Elegir el nivel correcto de detalle simplifica el problema sin perder información necesaria.\n\nUn patrón es una solución que aparece en situaciones parecidas. Recorrer una lista es un patrón; la acción interna puede sumar valores, buscar uno o filtrar elementos. Reconocerlo reduce repeticiones y permite crear funciones reutilizables. No conviene generalizar cada línea desde el comienzo: primero se entiende el problema y luego se abstrae cuando hay una repetición real.',
  'python|Tipos de datos':'Un tipo de dato describe qué clase de valor contiene una variable y qué operaciones tienen sentido sobre él. `int` representa enteros, `float` números de punto flotante, `str` texto y `bool` valores lógicos. Sumar dos enteros produce una cantidad, mientras que concatenar cadenas puede formar un nombre completo.\n\nPython asigna el tipo según el valor y permite reasignar una variable, pero las operaciones siguen reglas: sumar directamente una cadena y un número produce un error. Convierte los datos explícitamente cuando sea necesario, por ejemplo con `int()`, y valida que la conversión sea posible.',
  'python|Operadores lógicos':'Las comparaciones como `>`, `==` y `!=` producen valores booleanos: `True` o `False`. Los operadores `and`, `or` y `not` combinan esos resultados: con `and` ambas condiciones deben cumplirse; con `or` basta una; `not` invierte el resultado.\n\nPython evalúa `and` y `or` de izquierda a derecha y puede detenerse cuando ya conoce el resultado. Esto se llama cortocircuito y permite proteger operaciones: `lista and lista[0]` solo consulta el primer elemento si la lista no está vacía. Usa paréntesis para aclarar condiciones largas.',
  'python|Condicionales':'Un condicional elige qué instrucciones ejecutar según una expresión booleana. `if` comprueba el primer caso; `elif` agrega alternativas que se revisan si las anteriores fueron falsas, y `else` recoge el resto. En una misma cadena se ejecuta solo la primera rama verdadera.\n\nEn Python la indentación define qué líneas pertenecen a cada bloque, así que debe mantenerse consistente. Antes de programar una decisión, enumera los casos posibles y comprueba que no queden huecos ni solapamientos. Por ejemplo, si aprobar significa “3 o más”, una nota exactamente igual a 3 también debe aprobar con `nota >= 3`.',
  'python|Bucles':'Un bucle repite instrucciones y evita copiar el mismo bloque muchas veces. `for` suele usarse para recorrer una colección o una secuencia conocida; `while` resulta útil cuando la repetición depende de que una condición continúe siendo verdadera. El cuerpo puede actualizar un resultado o procesar el elemento actual.\n\nTodo bucle debe avanzar hacia su finalización. En un `while`, si ninguna instrucción cambia las variables que controlan la condición, puede producirse un bucle infinito. Prueba listas vacías y límites de `range()`: el extremo final no se incluye, así que `range(1, 6)` produce 1, 2, 3, 4 y 5.',
  'python|Manejo de errores':'Los errores pueden aparecer al convertir datos, dividir por cero, abrir un archivo que no existe o usar una variable indefinida. `try` marca el bloque que puede fallar y `except` indica cómo responder a una excepción. Así es posible mostrar un mensaje útil o pedir otro dato en vez de terminar sin explicación.\n\nEs mejor capturar errores específicos como `ValueError` que atrapar cualquier excepción: los fallos de programación no quedan ocultos. `else` puede ejecutar acciones cuando el `try` termina bien y `finally` sirve para liberar recursos en ambos casos. Manejar un error no significa ignorarlo: la respuesta debe permitir corregir o recuperar el estado.',
  'estructuras|Listas':'Una lista agrupa valores en una secuencia ordenada y modificable. Los índices comienzan en cero, por lo que `lista[0]` apunta al primero y `lista[-1]` al último. Una lista puede contener distintos tipos, aunque mantener una estructura coherente suele hacer el programa más fácil de entender.\n\n`append()` agrega al final, `insert()` coloca un elemento en una posición y `remove()` elimina la primera coincidencia por valor. Los índices fuera del rango causan `IndexError`; verifica la longitud antes de acceder si el índice puede variar. Las listas son útiles para colecciones cambiantes, aunque buscar un valor suele requerir revisar sus elementos uno por uno.',
  'estructuras|Diccionarios':'Un diccionario relaciona claves únicas con valores: una clave permite localizar la información asociada, como `usuario["nombre"]`. Las claves suelen ser cadenas o números inmutables; los valores pueden ser de cualquier tipo, incluso otra lista o diccionario. Esto permite representar registros y configuraciones.\n\nSi una clave no existe, usar corchetes produce `KeyError`. `get()` permite indicar un valor alternativo y `in` comprueba si existe la clave. Asignar a una clave existente actualiza su valor; asignar a una nueva la agrega. La búsqueda es rápida en promedio, pero un diccionario no sustituye una base de datos para guardar datos persistentes.',
  'estructuras|Conjuntos (sets)':'Un conjunto (`set`) guarda elementos únicos y permite comprobar pertenencia y comparar colecciones con operaciones matemáticas. Si se agregan valores repetidos, conserva una sola copia. Por eso puede convertir una lista con duplicados en una colección sin repeticiones.\n\nLa intersección (`&`) encuentra elementos compartidos, la unión (`|`) combina las colecciones y la diferencia (`-`) conserva los elementos de la primera que no están en la segunda. Los conjuntos no permiten acceder por posición y su orden no debe formar parte de la lógica. Sus elementos deben ser valores hashables, como cadenas o números.',
  'poo|Clases y objetos':'Una clase define una estructura común: sus atributos guardan el estado y sus métodos describen operaciones. Al crear una instancia se obtiene un objeto con valores propios. Dos estudiantes pueden pertenecer a la misma clase, pero tener nombres y notas diferentes.\n\nEn Python, `__init__` inicializa la instancia y `self` se refiere al objeto que ejecuta el método. Diseña una clase alrededor de una responsabilidad reconocible; una clase que acumula datos y acciones sin relación será difícil de mantener. Los métodos permiten expresar reglas del dominio, como `aprobar()`, sin dispersarlas por toda la aplicación.',
  'poo|Encapsulamiento':'El encapsulamiento reúne el estado y sus operaciones, y establece una forma controlada de acceder a ellos. Una cuenta bancaria puede permitir depósitos y retiros mediante métodos que validan los montos, en vez de dejar que cualquier parte del programa cambie el saldo libremente.\n\nEn Python, un nombre con dos guiones bajos activa una transformación de nombre que dificulta el acceso accidental; no es una barrera de seguridad estricta. También se usa un guion bajo como convención para miembros internos. La idea principal es mantener invariantes: por ejemplo, impedir que un retiro deje la cuenta en un estado inválido.',
  'poo|Herencia':'La herencia relaciona una clase general con otra más especializada. La clase hija recibe atributos y métodos de la clase base y puede añadir o redefinir comportamientos. En el ejemplo, `Profesor` comparte nombre y edad con `Persona`, pero agrega la materia que enseña.\n\n`super()` permite reutilizar la inicialización o el comportamiento de la clase base. La herencia es útil cuando existe una relación “es un”; no debe usarse solo para compartir unas pocas líneas. Si varias clases comparten una capacidad sin ser variantes del mismo concepto, una función auxiliar o la composición puede expresar mejor el diseño.',
  'web|Arquitectura web':'Una aplicación web suele separar responsabilidades. El frontend presenta información y recibe acciones en el navegador; el backend valida solicitudes, aplica reglas del negocio y coordina servicios; la base de datos conserva información entre ejecuciones. El navegador y el servidor se comunican normalmente mediante solicitudes y respuestas HTTP.\n\nSeparar capas permite cambiar la interfaz sin reescribir la persistencia y centralizar validaciones en el servidor. El navegador no debe considerarse confiable: el backend tiene que validar de nuevo los datos recibidos. En proyectos pequeños las capas pueden compartir proceso o archivos, pero sus responsabilidades siguen siendo distintas.',
  'web|HTML — estructura':'HTML es un lenguaje de marcado que describe los elementos y el significado de una página; no define por sí solo la lógica. `header`, `main`, `nav`, `section` y `footer` ayudan a estructurar el documento para navegadores, lectores y tecnologías de asistencia. Los formularios agrupan controles y permiten enviar datos.\n\nCada campo debería tener una etiqueta comprensible y un nombre que el servidor pueda identificar. La validación HTML mejora la experiencia, pero no reemplaza la validación del backend. Mantén una jerarquía ordenada de encabezados, declara el idioma del documento y añade texto alternativo a las imágenes informativas para hacer el contenido accesible.',
  'web|JavaScript — interactividad':'JavaScript puede seleccionar elementos del DOM, responder a eventos y actualizar la interfaz. `addEventListener()` registra una función para eventos como `click` o `submit`. En el ejemplo, `preventDefault()` evita el envío automático para validar el formulario y controlar el resultado desde el código.\n\nLos valores introducidos suelen llegar como cadenas, incluso en campos numéricos, por lo que se deben comprobar y convertir según el caso. Separar lectura, validación y actualización de la interfaz simplifica el mantenimiento. Si se envía el dato a un servidor, este debe validarlo de nuevo: el código del navegador puede modificarse o desactivarse.',
  'web|Flask — servidor Python':'Flask asocia funciones de Python con rutas HTTP. `@app.route` declara qué URL acepta una solicitud y qué función genera la respuesta; `methods` especifica verbos como GET para consultar y POST para crear. `request` permite leer datos recibidos y `jsonify` transforma estructuras Python en JSON.\n\nEl ejemplo guarda datos en una lista solo mientras el proceso está activo: al reiniciar el servidor se pierden. Una aplicación real también valida el cuerpo de la solicitud, maneja errores y persiste los registros en una base de datos. No ejecutes `debug=True` en un servidor público, porque el modo de depuración puede revelar información y permitir acciones peligrosas.',
  'bd|¿Qué es una base de datos?':'Una base de datos permite guardar, consultar y modificar información de forma estructurada. Un sistema gestor de bases de datos administra los datos, controla accesos y ofrece mecanismos de consulta. En una base relacional, la información suele organizarse en tablas con filas y columnas; otros modelos, como documentos, organizan los datos de otra manera.\n\nLa persistencia significa que los datos continúan disponibles después de cerrar el programa. Elegir un motor depende de las relaciones, el volumen, las consultas y el despliegue. SQLite es práctico para aprender y para aplicaciones pequeñas; PostgreSQL y MySQL suelen utilizarse cuando hay varios usuarios o servicios conectándose. Las copias de seguridad y los permisos también forman parte del diseño.',
  'bd|CRUD en SQL':'CRUD resume las cuatro operaciones que una aplicación realiza sobre registros: crear, leer, actualizar y eliminar. En SQL corresponden normalmente a `INSERT`, `SELECT`, `UPDATE` y `DELETE`. Cada operación debe dirigirse a la tabla y filas adecuadas; `WHERE` filtra los registros que se consultan, actualizan o eliminan.\n\nAntes de ejecutar `UPDATE` o `DELETE`, prueba el filtro con un `SELECT` equivalente para ver qué registros afecta. Sin `WHERE`, la operación puede aplicarse a todas las filas. En aplicaciones, usa consultas parametrizadas en lugar de concatenar texto introducido por personas para reducir el riesgo de inyección SQL.',
  'bd|Relaciones y claves foráneas':'Las tablas se relacionan mediante identificadores. Una clave primaria (`PRIMARY KEY`) identifica de forma única una fila; una clave foránea (`FOREIGN KEY`) guarda una referencia a la clave de otra tabla. Por ejemplo, un pedido puede guardar el identificador del cliente sin repetir todos sus datos.\n\nLas restricciones permiten que la base de datos rechace referencias a filas inexistentes y mantenga la integridad referencial. Una relación uno a muchos suele poner la clave foránea en el lado “muchos”; una relación muchos a muchos se representa con una tabla intermedia. Esta organización reduce duplicados y mantiene coherentes las actualizaciones.',
  'cpp|Estructura básica y compilación':'Un programa C++ se escribe como código fuente y normalmente se transforma en código máquina en varias etapas. El preprocesador procesa directivas como `#include`; el compilador traduce los archivos fuente y el enlazador combina los objetos y bibliotecas necesarios. `main()` es el punto de entrada y su valor de retorno informa cómo terminó el programa.\n\n`#include <iostream>` declara los recursos de entrada y salida usados por `cout`. `return 0` suele indicar que el programa terminó correctamente. La compilación real también detecta incompatibilidades de tipos, símbolos ausentes y errores de enlace que una simulación sencilla del lenguaje no puede reproducir.',
  'cpp|Tipos de datos y variables':'Una variable C++ ocupa almacenamiento y se declara con un tipo, que determina qué valores puede representar y qué operaciones se permiten. `int` representa enteros, `double` valores de punto flotante, `char` un carácter y `bool` verdadero o falso. El tipo se comprueba durante la compilación y ayuda a detectar algunos errores antes de ejecutar.\n\nLas conversiones pueden cambiar el valor: guardar `7.8` en un entero descarta la parte decimal. Inicializa las variables antes de leerlas para no usar valores indeterminados. `const` expresa que una variable no debe cambiar después de inicializarse, documenta la intención y previene modificaciones accidentales.',
  'cpp|Operadores y expresiones':'Los operadores construyen expresiones a partir de valores. Los aritméticos calculan, los relacionales comparan y los lógicos combinan condiciones. El orden de evaluación depende de la precedencia: por ejemplo, la multiplicación se evalúa antes que la suma, salvo que los paréntesis indiquen otra agrupación.\n\nLa división entre enteros también produce un entero, por lo que `7 / 2` da `3`; para obtener `3.5`, al menos un operando debe ser decimal. Distingue `=` (asignación) de `==` (comparación). Los paréntesis explícitos pueden hacer más comprensible una expresión larga.',
  'cpp|Condicionales y bucles':'Las condiciones ejecutan ramas distintas y los bucles repiten instrucciones. `if`, `else if` y `else` seleccionan una rama; `for` suele recorrer una secuencia con límites conocidos y `while` repite mientras su condición sea verdadera. Las llaves delimitan los bloques de C++, incluso si contienen una sola instrucción.\n\nAl diseñar un bucle, identifica la inicialización, la condición y el cambio que lleva al final. Si el contador no cambia, el programa puede quedar atrapado. Revisa también el límite: un error de una posición puede omitir un elemento o acceder fuera de un array.',
  'cpp|Funciones':'Una función agrupa una tarea con nombre, puede recibir parámetros y devolver un resultado. Su declaración hace explícita la interfaz; su definición contiene las instrucciones que realizan el trabajo. Separar el programa en funciones permite probar y reutilizar partes sin duplicar algoritmos.\n\nLos parámetros pueden pasarse por valor, creando una copia, o por referencia, permitiendo trabajar con el objeto original. Usa referencias constantes si la función solo necesita leer el dato. El tipo de retorno forma parte de la declaración; una función `void` no devuelve un valor. Procura que cada función tenga una responsabilidad concreta.',
  'cpp|Arrays y vectores':'Un array tradicional contiene una cantidad fija de elementos del mismo tipo y se accede por índices desde cero. Un acceso fuera de sus límites tiene comportamiento indefinido en C++, así que puede producir resultados impredecibles. `std::vector` administra una secuencia dinámica, conoce su tamaño y permite agregar elementos con `push_back()`.\n\nUsa `size()` para recorrer el número actual de elementos y evita conservar índices inválidos después de modificar el vector. `at()` comprueba los límites y lanza una excepción si el índice no existe. `vector` suele ser la opción preferida para colecciones cuyo tamaño puede cambiar.',
  'cpp|Punteros y referencias':'Una referencia es otro nombre para un objeto y debe vincularse al inicializarse. Un puntero almacena una dirección y puede cambiar de destino o ser nulo. `&variable` obtiene una dirección y `*puntero` accede al objeto apuntado, siempre que el puntero sea válido. Esto permite compartir o modificar datos sin copiar objetos grandes.\n\nDesreferenciar un puntero nulo o una dirección inválida produce comportamiento indefinido. En C++ moderno se prefieren referencias cuando el objeto debe existir y punteros inteligentes como `std::unique_ptr` cuando se necesita propiedad dinámica. Evitar la gestión manual de memoria reduce fugas y errores de ciclo de vida.',
  'cpp|Clases y POO en C++':'Una clase define miembros —datos y funciones— que describen un objeto. `public`, `private` y `protected` controlan desde dónde se pueden usar; el constructor establece el estado inicial y los métodos operan sobre él. Cada instancia tiene sus propios valores.\n\nEn C++ también importa la vida útil de los recursos. Los destructores se ejecutan al destruir objetos y pueden liberar recursos; las clases estándar y RAII suelen gestionar memoria, archivos y bloqueos con más seguridad que las llamadas manuales a `new` y `delete`. Mantén reglas que garanticen que cada instancia permanezca válida.',
  'java|Estructura básica y compilación':'Un archivo Java declara clases y suele contener un método `public static void main(String[] args)` que inicia la aplicación. `javac` compila el código fuente a bytecode en archivos `.class`; la máquina virtual Java (JVM) carga y ejecuta ese bytecode. Así, el mismo programa puede ejecutarse en sistemas distintos con una JVM compatible.\n\nEl nombre de una clase pública debe coincidir con el archivo, como `Main.java`. Los errores de sintaxis o tipos aparecen durante la compilación. En proyectos grandes, Maven o Gradle administran dependencias, compilación y empaquetado, pero el ciclo básico sigue siendo escribir, compilar y ejecutar.',
  'java|Tipos de datos primitivos':'Java define tipos primitivos para representar valores básicos. `int` almacena enteros, `double` valores decimales, `char` un carácter UTF-16 y `boolean` verdadero o falso. Los primitivos guardan directamente un valor; `String` es una clase que representa texto y ofrece métodos para consultarlo y transformarlo.\n\nCada tipo numérico tiene un rango limitado, por lo que una operación puede desbordarse o perder precisión. Una variable local debe inicializarse antes de leerse. Las colecciones genéricas, como `ArrayList`, utilizan tipos de referencia; para números primitivos se usan clases envoltorio como `Integer`.',
  'java|Condicionales y operadores':'Los operadores aritméticos calculan valores, los de comparación producen booleanos y `&&`, `||` y `!` combinan condiciones. `if`, `else if` y `else` seleccionan qué bloque ejecutar. Las llaves delimitan los bloques y ayudan a evitar errores al agregar instrucciones.\n\n`&&` y `||` aplican cortocircuito: la segunda condición puede no evaluarse si la primera determina el resultado. Esto permite revisar `objeto != null && objeto.metodo()`. Para comparar el contenido de dos textos `String`, usa `equals()`; `==` compara si las referencias señalan al mismo objeto.',
  'java|Bucles':'Java ofrece `for`, `while` y `do-while` para repetir instrucciones. El `for` tradicional agrupa inicialización, condición y actualización; `while` comprueba la condición antes de cada vuelta; `do-while` ejecuta el cuerpo al menos una vez. El `for-each` recorre elementos de una colección sin administrar índices manualmente.\n\nElige el bucle según el problema y verifica qué variable cambia en cada vuelta. `break` termina el bucle y `continue` salta a la siguiente iteración, pero usarlos en exceso puede ocultar la lógica. Comprueba casos de cero elementos y el límite final para evitar accesos fuera del rango.',
  'java|Métodos y sobrecarga':'Un método declara una operación con nombre, parámetros, tipo de retorno y un cuerpo. Los métodos de instancia trabajan con un objeto; los estáticos pertenecen a la clase y no acceden directamente al estado de una instancia. La firma distingue métodos por su nombre y lista de parámetros.\n\nLa sobrecarga permite definir métodos con el mismo nombre si reciben parámetros distintos en cantidad o tipo. El compilador elige el método adecuado según la llamada; cambiar solo el tipo de retorno no basta para sobrecargar. Usa esta capacidad cuando las operaciones tengan el mismo significado.',
  'java|Arrays y ArrayList':'Un array Java tiene una longitud fija al crearlo y su propiedad `length` indica cuántos elementos contiene. `ArrayList` es una lista redimensionable: `add()` agrega, `get()` consulta, `set()` reemplaza y `remove()` elimina; `size()` devuelve su tamaño.\n\nLos índices comienzan en cero y deben estar dentro del rango válido. `ArrayList` acepta tipos de referencia, por eso se usan genéricos como `ArrayList<Integer>` para números. Puede crecer con facilidad, aunque insertar o borrar en medio desplaza elementos. Usa arrays para tamaños fijos y listas dinámicas cuando la colección cambie.',
  'java|Clases y objetos en Java':'Una clase Java declara campos, constructores y métodos. El constructor tiene el mismo nombre que la clase y configura los campos cuando se crea un objeto con `new`. Cada objeto mantiene su propio estado y las referencias permiten acceder a él y compartirlo.\n\nLos modificadores de acceso definen qué código puede utilizar una clase o miembro. Mantener campos privados y ofrecer métodos para modificarlos ayuda a evitar estados incoherentes. `this` identifica la instancia actual y permite distinguir un campo de un parámetro con el mismo nombre.',
  'java|Herencia e interfaces':'Con `extends`, una clase hereda de una única clase padre y puede especializar sus métodos; con `implements`, declara que cumple las operaciones de una o varias interfaces. Una interfaz describe un contrato y permite usar de forma uniforme clases distintas sin que compartan una clase base común.\n\n`@Override` indica que un método reemplaza uno heredado y permite que el compilador compruebe su firma. Usa herencia para relaciones reales de especialización e interfaces para capacidades compartidas. Java no permite heredar de varias clases, pero una clase puede implementar varias interfaces.',
  'java|Manejo de excepciones':'Una excepción representa una condición que interrumpe el flujo normal, como un archivo ausente o una conversión inválida. `try` contiene la operación que puede fallar, `catch` indica cómo manejar un tipo concreto y `finally` permite limpiar recursos. Java distingue excepciones comprobadas, que deben declararse o capturarse, y no comprobadas, como algunos errores de programación.\n\nCaptura la excepción más específica que puedas manejar y conserva el contexto. No uses un `catch` vacío: esconder la causa dificulta diagnosticar fallos. Para archivos y otros recursos, `try-with-resources` suele ser preferible porque los cierra automáticamente incluso cuando ocurre una excepción.'
};
Object.assign(CONCEPT_EXPLANATIONS,window.SYNTAX_EXPLANATIONS||{});

function getConceptExplanation(topicId,title){return CONCEPT_EXPLANATIONS[`${topicId}|${title}`]||'Este concepto forma parte de las herramientas básicas para diseñar programas claros. Relaciona su definición con el ejemplo y observa qué datos recibe, qué pasos realiza y qué resultado produce. Después modifica un caso de prueba para comprobar cómo cambia el comportamiento.';}

const GLOSSARY_CONTEXT={
  'pensamiento|¿Qué es pensar computacionalmente?':'Para practicarlo, toma un problema cotidiano y escribe el objetivo, los datos que tienes, las reglas y el resultado esperado. Después divide la tarea en pasos que puedan verificarse uno por uno. Se relaciona con algoritmos, abstracción y descomposición: juntos ayudan a pasar de una necesidad humana a una solución programable.',
  'pensamiento|Algoritmos':'Puedes medir un algoritmo preguntando cuántos pasos necesita cuando aumenta la cantidad de datos. Por ejemplo, buscar un nombre uno por uno puede requerir revisar toda una lista. Esta idea introduce el análisis de eficiencia; aun así, primero prioriza que la solución sea correcta y comprensible, y luego busca optimizarla.',
  'pensamiento|Abstracción y patrones':'Una abstracción útil oculta detalles repetitivos detrás de una interfaz simple, como una función `calcular_promedio(notas)`. Si los datos cambian pero el propósito sigue igual, el patrón puede reutilizarse. Este concepto se conecta con funciones y diseño de clases, pero una abstracción innecesaria añade complejidad: debe simplificar el uso.',
  'python|Tipos de datos':'Al leer con `input()`, Python devuelve texto incluso cuando la persona escribe dígitos; por eso hace falta convertir con `int()` o `float()` antes de calcular. `type()` permite inspeccionar el valor, mientras que `isinstance()` puede comprobar si pertenece a un tipo esperado. Estas conversiones se relacionan directamente con el manejo de errores.',
  'python|Operadores lógicos':'Una validación de edad podría combinar `edad >= 18 and tiene_documento`; si cualquiera de las dos partes falla, la condición completa es falsa. Conviene nombrar condiciones complejas con variables booleanas para que la intención sea legible. Relaciona los operadores con comparaciones y condicionales: suelen aparecer juntos al validar reglas de negocio.',
  'python|Condicionales':'Los condicionales son apropiados cuando el programa debe elegir una acción, por ejemplo aplicar una tarifa distinta según la edad. Para muchos valores concretos puede ser más claro usar un diccionario de opciones o `match` en versiones actuales de Python. Siempre prueba el límite de cada rango y una entrada que no encaje en ninguno.',
  'python|Bucles':'Usa `for` para recorrer elementos y `while` para esperar que ocurra algo o repetir una validación. `break` termina un bucle y `continue` salta a la siguiente vuelta, aunque conviene mantener un flujo sencillo. Los bucles trabajan con listas, cadenas y rangos; los errores de índice y los ciclos infinitos son fallos frecuentes.',
  'python|Manejo de errores':'Una aplicación puede volver a pedir una edad si la conversión genera `ValueError`, y mostrar otro mensaje si el valor no está dentro del rango aceptado. `try/except` se complementa con validación previa: valida lo que sea fácil de comprobar y captura errores que todavía puedan ocurrir. Un mensaje claro debe indicar cómo corregir el dato.',
  'estructuras|Listas':'Una lista conviene cuando importa conservar el orden, permitir duplicados o modificar la colección, como una fila de tareas pendientes. Para agregar varios elementos puedes usar `extend()`; para recorrerlos, un bucle `for`. Las listas se conectan con índices y bucles, y sus operaciones de búsqueda pueden ser más lentas que consultar una clave de diccionario.',
  'estructuras|Diccionarios':'Un diccionario resulta práctico para buscar rápidamente un dato por una clave conocida, como consultar la nota de un estudiante usando su código. `keys()`, `values()` e `items()` permiten recorrer claves, valores o pares. Se relaciona con JSON, que representa objetos de forma parecida; las claves deben ser únicas y describir el dato con claridad.',
  'estructuras|Conjuntos (sets)':'Los conjuntos son útiles para comparar grupos, como saber qué estudiantes aparecen en dos cursos o eliminar etiquetas duplicadas. Comprueba pertenencia con `in`, normalmente de forma muy rápida. Si necesitas mantener el orden original, no conviertas sin más la colección a un conjunto: usa una estrategia que deduplique conservando el orden.',
  'poo|Clases y objetos':'Una clase conviene cuando varios elementos comparten datos y comportamientos, como estudiantes con nombre, nota y una operación para saber si aprobaron. Cada objeto representa una instancia distinta. Este concepto se relaciona con encapsulamiento y herencia; comienza con clases sencillas y evita crear una clase cuando una función y unos datos simples bastan.',
  'poo|Encapsulamiento':'En una cuenta, `depositar()` puede rechazar montos negativos y `retirar()` comprobar el saldo antes de modificarlo. La clase protege así sus reglas aunque el código que la usa no conozca sus detalles internos. Se relaciona con invariantes y diseño de interfaces; en Python, el guion bajo indica intención, pero no proporciona seguridad contra accesos deliberados.',
  'poo|Herencia':'Una clase `Profesor` puede especializar `Persona` porque todo profesor también tiene nombre y edad. Si solo se desea compartir una acción, sin una relación real de especialización, suele ser más flexible componer objetos o delegar en una función. La herencia se conecta con polimorfismo: una clase hija puede redefinir un método heredado.',
  'web|Arquitectura web':'Al diseñar una función nueva, decide si presenta datos, aplica una regla del negocio o los persiste; esa decisión indica qué capa debería asumirla. Una petición del navegador puede recorrer frontend, backend y base de datos antes de volver como respuesta. Este modelo se relaciona con HTTP, APIs y seguridad, especialmente con la validación del lado servidor.',
  'web|HTML — estructura':'El navegador transforma el HTML en un árbol de elementos llamado DOM, que CSS puede presentar y JavaScript puede consultar o modificar. Usa etiquetas semánticas para comunicar el propósito y etiquetas `label` asociadas a los campos del formulario. HTML se complementa con CSS para la apariencia y con JavaScript para el comportamiento interactivo.',
  'web|JavaScript — interactividad':'Un evento describe algo que ocurre, como enviar un formulario o pulsar un botón; el manejador responde a ese evento. Además de validar, JavaScript puede actualizar el DOM, aunque cambios de estado importantes deben persistirse en un backend. Se relaciona con HTML, selectores del DOM, promesas y solicitudes `fetch()` a una API.',
  'web|Flask — servidor Python':'Flask es útil para crear una API pequeña que reciba una petición y devuelva JSON. Un cliente envía datos por HTTP y la ruta correspondiente valida y procesa la solicitud. El ejemplo no incluye persistencia, autenticación ni configuración de producción; esos aspectos deben incorporarse antes de manejar información real o exponer el servidor a internet.',
  'bd|¿Qué es una base de datos?':'Una tabla puede representar estudiantes y otra cursos; la base conserva sus registros al cerrar la aplicación y permite consultarlos de forma consistente. Las bases relacionales usan SQL y esquemas definidos; las NoSQL cubren otros modelos y patrones de acceso. El diseño debe considerar respaldos, permisos y cómo cambiará el volumen de datos.',
  'bd|CRUD en SQL':'Una pantalla de registro suele ejecutar `INSERT` al crear, `SELECT` al listar, `UPDATE` al editar y `DELETE` al borrar. Cada operación debería recibir parámetros validados y ejecutarse con permisos adecuados. Antes de borrar datos, muchas aplicaciones solicitan confirmación o conservan una copia; `WHERE` y las transacciones ayudan a controlar el alcance.',
  'bd|Relaciones y claves foráneas':'En el ejemplo de notas, una fila puede apuntar a un estudiante y a una materia mediante sus identificadores. Un `JOIN` combina las tablas relacionadas para mostrar nombres junto con la nota. Las claves foráneas se apoyan en claves primarias y normalización; piensa qué debe pasar al borrar la fila referenciada para evitar huérfanos.',
  'cpp|Estructura básica y compilación':'El proceso habitual es guardar el fuente, compilarlo con una herramienta como `g++` y ejecutar el archivo generado. Un error de compilación impide crear el ejecutable; un error de ejecución aparece cuando el programa ya está corriendo. Este flujo se diferencia de los lenguajes interpretados y ayuda a ubicar en qué etapa buscar cada problema.',
  'cpp|Tipos de datos y variables':'Elige el tipo según el rango y precisión requeridos: `int` para conteos, `double` para muchas mediciones y `bool` para estados. `std::string` almacena texto y requiere incluir `<string>`. El tipado estático permite detectar incompatibilidades al compilar; `auto` puede inferir un tipo, pero no elimina la necesidad de entenderlo.',
  'cpp|Operadores y expresiones':'Para calcular porcentajes con decimales, convierte un operando antes de dividir; de lo contrario, la división entera puede truncar el resultado. El operador `%` sirve para residuos y comprobar divisibilidad. Estas expresiones suelen aparecer en condiciones de `if` y `while`; paréntesis y variables con nombres claros evitan errores de precedencia.',
  'cpp|Condicionales y bucles':'Una condición como `nota >= 70` puede escoger una categoría; un bucle procesa todas las notas de un grupo. Las llaves siempre son recomendables porque evitan errores al añadir líneas. `break` y `continue` cambian el flujo de repetición; usa pruebas con valores fronterizos para verificar que cada rama se alcanza como esperas.',
  'cpp|Funciones':'Una función puede recibir datos, procesarlos y devolver un resultado reutilizable. Si modifica una colección, el paso por referencia evita copias; si solo la consulta, una referencia `const` comunica que no debería cambiarla. Los prototipos permiten llamar funciones definidas más adelante y ayudan a organizar el código en archivos separados.',
  'cpp|Arrays y vectores':'Para recorrer un vector de forma segura, puedes usar `for (const auto& elemento : vector)` cuando no necesitas cambiar los valores. Los iteradores y algoritmos estándar permiten buscar, ordenar y transformar colecciones. El vector administra su memoria automáticamente; esto suele ser más seguro que crear arrays dinámicos manuales con `new`.',
  'cpp|Punteros y referencias':'Usa una referencia cuando una función requiere un objeto existente; usa un puntero cuando la ausencia (`nullptr`) o el cambio de destino tenga significado. Comprueba el puntero antes de desreferenciarlo. Este tema se conecta con memoria dinámica, propiedad y RAII; los punteros crudos no deberían representar propiedad en código moderno sin una razón específica.',
  'cpp|Clases y POO en C++':'Una clase puede mantener sus campos privados y exponer métodos públicos para proteger su estado. Un constructor inicializa los miembros, preferiblemente con una lista de inicialización. Las clases se relacionan con encapsulamiento, composición y herencia; los destructores y RAII permiten asociar la vida útil de recursos a la vida útil del objeto.',
  'java|Estructura básica y compilación':'El ciclo habitual consiste en guardar `Main.java`, compilar con `javac Main.java` y ejecutar con `java Main`. El compilador genera bytecode y la JVM lo interpreta o compila durante la ejecución. Así se entiende la portabilidad de Java: el bytecode puede compartirse, pero el equipo que lo ejecuta necesita una JVM compatible.',
  'java|Tipos de datos primitivos':'Elige `int` para cantidades enteras, `double` para cálculos decimales generales y `boolean` para condiciones. Para colecciones se utilizan envoltorios como `Integer`, ya que los genéricos no aceptan directamente `int`. La conversión automática entre primitivos y envoltorios se llama boxing/unboxing y puede producir `NullPointerException` si un envoltorio es nulo.',
  'java|Condicionales y operadores':'Las comparaciones numéricas y booleanas suelen combinarse para validar entradas antes de usarlas. Para comparar texto, `equalsIgnoreCase()` ignora mayúsculas y minúsculas, mientras que `equals()` distingue el contenido exacto. Los condicionales suelen acompañar bucles y métodos; usa nombres booleanos expresivos para que cada condición se lea como una regla.',
  'java|Bucles':'El `for-each` es sencillo para leer todos los elementos, pero no proporciona directamente el índice. Usa un `for` tradicional si necesitas la posición o modificar elementos por índice. Los bucles se combinan con arrays y `ArrayList`; evita eliminar elementos durante un `for-each`, porque puede producir `ConcurrentModificationException`.',
  'java|Métodos y sobrecarga':'Un método divide una clase en operaciones con responsabilidades claras y permite reutilizar la lógica. La sobrecarga ofrece distintas formas de invocar la misma operación, por ejemplo con dos o tres valores. Se relaciona con tipos y constructores; demasiadas variantes pueden confundir, así que documenta diferencias importantes y evita firmas ambiguas.',
  'java|Arrays y ArrayList':'El array funciona bien cuando la cantidad de elementos es fija, mientras que `ArrayList` resulta cómodo si se agregan o eliminan elementos. `Collections.sort()` puede ordenar una lista y los genéricos ayudan a mantener el tipo de sus elementos. Las listas se relacionan con bucles y métodos; revisa los límites antes de usar `get(indice)`.',
  'java|Clases y objetos en Java':'Un objeto se crea con `new` y una referencia permite invocar sus métodos. Dos referencias pueden apuntar al mismo objeto, así que un cambio hecho por una también puede observarse desde la otra. Este comportamiento se conecta con encapsulamiento, constructores y `this`; diferencia siempre la identidad del objeto de la igualdad de su contenido.',
  'java|Herencia e interfaces':'Una interfaz puede representar una capacidad como `Comparable` o `Runnable` y permitir que tipos distintos compartan un contrato. El polimorfismo permite guardar objetos de distintas clases en una referencia de tipo base y llamar al método sobrescrito correspondiente. Combina interfaces y composición para evitar jerarquías de herencia rígidas.',
  'java|Manejo de excepciones':'Si un método no puede resolver una excepción comprobada, puede declararla con `throws` para que la gestione quien lo llama. No conviertas errores inesperados en resultados aparentemente válidos. El manejo se relaciona con validación y recursos; utiliza `try-with-resources` para cerrar archivos y conexiones automáticamente.'
};
Object.assign(GLOSSARY_CONTEXT,window.SYNTAX_GLOSSARY_CONTEXT||{});

function getGlossaryContext(topicId,title){return GLOSSARY_CONTEXT[`${topicId}|${title}`]||'Relaciona este término con el ejemplo y con los conceptos cercanos de su categoría. Practica identificando qué problema resuelve, qué requisitos necesita y qué resultado produce. Al aplicarlo, considera también los casos límite y cómo comunicarías un error a quien usa el programa.';}

function renderGlosario(){
  const q=(document.getElementById('glosario-input').value||'').toLowerCase().trim();
  const filtered=q?ALL_CONCEPTS.filter(c=>c.title.toLowerCase().includes(q)||c.body.toLowerCase().includes(q)||c.topicLabel.toLowerCase().includes(q)):ALL_CONCEPTS;
  const list=document.getElementById('glosario-list');
  if(filtered.length===0){list.innerHTML='<div class="empty-state">No se encontraron conceptos para "'+escapeHTML(q)+'"</div>';document.getElementById('glosario-detail').style.display='none';return;}
  list.innerHTML=filtered.map(c=>{const ri=ALL_CONCEPTS.indexOf(c);return`<div class="glos-item ${ri===selectedGlosItem?'selected':''}" onclick="showGlosDetail(${ri})"><div class="glos-title">${c.title}</div><div class="glos-cat">${c.topicLabel}</div></div>`;}).join('');
}

function showGlosDetail(i){
  selectedGlosItem=i;const c=ALL_CONCEPTS[i];
  document.getElementById('gl-title').textContent=c.title;
  document.getElementById('gl-badge').textContent=c.topicBadge;
  document.getElementById('gl-badge').className='badge '+c.topicBc;
  document.getElementById('gl-body').textContent=c.body;
  document.getElementById('gl-detail').textContent=getConceptExplanation(c.topicId,c.title);
  document.getElementById('gl-context').textContent=getGlossaryContext(c.topicId,c.title);
  document.getElementById('gl-code').textContent=c.code;
  const tipEl=document.getElementById('gl-tip');
  if(c.tip){tipEl.textContent=c.tip;tipEl.style.display='block';}else{tipEl.style.display='none';}
  document.getElementById('glosario-detail').style.display='block';
  renderGlosario();
}

// ═══════════════════════════════════════════════════════════
//  MOTOR EDUCATIVO
//  Python usa Pyodide en un Web Worker; C++ y Java mantienen
//  sus simuladores simplificados en este archivo.
// ═══════════════════════════════════════════════════════════

const TEMPLATES={
  python:`def main():
    print("Hola mundo")
    nombre = input("¿Cuál es tu nombre? ")
    print(f"Hola, {nombre}!")

if __name__ == "__main__":
    main()`,
  javascript:`function main() {
  console.log("Hola mundo");
  const nombre = prompt("¿Cuál es tu nombre? ");
  console.log("Hola, " + nombre + "!");
}

main();`,
  c:`#include <stdio.h>

int main(void) {
    printf("Hola mundo\\n");
    return 0;
}`,
  cpp:`#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "Hola mundo" << endl;
    string nombre;
    cout << "¿Cuál es tu nombre? ";
    cin >> nombre;
    cout << "Hola, " << nombre << "!" << endl;
    return 0;
}`,
  csharp:`using System;

class Program {
    static void Main() {
        Console.WriteLine("Hola mundo");
    }
}`,
  java:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hola mundo");
        Scanner sc = new Scanner(System.in);
        System.out.print("¿Cuál es tu nombre? ");
        String nombre = sc.nextLine();
        System.out.println("Hola, " + nombre + "!");
        sc.close();
    }
}`};

const LANG_META={
  python:{name:'Python',badge:'Python',badgeClass:'python',filename:'main.py',color:'#3FB950'},
  javascript:{name:'JavaScript',badge:'JavaScript',badgeClass:'javascript',filename:'main.js',color:'#F1E05A'},
  c:{name:'C',badge:'C',badgeClass:'c',filename:'main.c',color:'#58A6FF'},
  cpp:{name:'C++',badge:'C++',badgeClass:'cpp',filename:'main.cpp',color:'#58A6FF'},
  csharp:{name:'C#',badge:'C#',badgeClass:'csharp',filename:'Program.cs',color:'#BC8CFF'},
  java:{name:'Java',badge:'Java',badgeClass:'java',filename:'Main.java',color:'#D29922'}
};

let ideReady=false;
let currentLang='python';
let isRunning=false;
let execHistory=[];
let projects=[];
let pythonWorker=null;
let javascriptWorker=null;
let editorDrafts={};
let draftSaveTimer=null;
let activeSuggestions=[];
let activeSuggestionIndex=0;
let runnerEndpoint='';
let runnerToken='';
const PYTHON_RUN_TIMEOUT_MS=30000;
const PYTHON_STARTUP_TIMEOUT_MS=120000;
const JAVASCRIPT_RUN_TIMEOUT_MS=10000;

// Escape user supplied values before they are interpolated into markup.
function escapeHTML(value){
  return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function readStoredArray(key){
  try{const value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value:[];}catch(error){return[];}
}
function readStoredObject(key){try{const value=JSON.parse(localStorage.getItem(key)||'{}');return value&&typeof value==='object'&&!Array.isArray(value)?value:{};}catch(error){return{};}}

function initIDE(){
  if(ideReady)return;
  ideReady=true;
  editorDrafts=readStoredObject('vc_drafts_v1');
  const draftLang=localStorage.getItem('vc_last_lang');
  if(LANG_META[draftLang])currentLang=draftLang;
  document.getElementById('lang-select').value=currentLang;
  setEditorCode(typeof editorDrafts[currentLang]==='string'?editorDrafts[currentLang]:TEMPLATES[currentLang]);
  changeLang(false);
  document.getElementById('stdin-input').value=localStorage.getItem('vc_stdin_draft')||'';
  document.getElementById('stdin-input').addEventListener('input',saveIDEState);
  const savedEndpoint=localStorage.getItem('vc_runner_endpoint')||'';
  runnerEndpoint=savedEndpoint;
  document.getElementById('runner-endpoint').value=savedEndpoint;
  updateLineNumbers();
  loadProjectsFromStorage();
  execHistory=readStoredArray('vc_history').filter(item=>item&&LANG_META[item.lang]&&typeof item.snippet==='string').slice(0,30);
  renderProjList();
  renderHistoryList();
}

function changeLang(resetCode=true){
  if(ideReady){
    clearTimeout(draftSaveTimer);
    editorDrafts[currentLang]=document.getElementById('code-editor').value;
    try{localStorage.setItem('vc_drafts_v1',JSON.stringify(editorDrafts));}catch(error){}
  }
  currentLang=document.getElementById('lang-select').value;
  const meta=LANG_META[currentLang];
  document.getElementById('lang-badge').textContent=meta.badge;
  document.getElementById('lang-badge').className='lang-badge '+meta.badgeClass;
  document.getElementById('editor-filename').textContent=meta.filename;
  const langIcons={python:'🐍',javascript:'🟨',c:'🔹',cpp:'🔵',csharp:'🟣',java:'☕'};
  document.getElementById('status-lang').textContent=`${langIcons[currentLang]} ${meta.name}`;
  if(resetCode){setEditorCode(typeof editorDrafts[currentLang]==='string'?editorDrafts[currentLang]:TEMPLATES[currentLang]);}
  saveIDEState();
  clearConsole();
}

function setEditorCode(code){
  document.getElementById('code-editor').value=code;
  onEditorInput();
}

function onEditorInput(){
  updateLineNumbers();
  const code=document.getElementById('code-editor').value;
  document.getElementById('char-count').textContent=code.length+' caracteres';
  document.getElementById('status-lines').textContent='Líneas: '+code.split('\n').length;
  renderEditorHighlight();
  saveIDEState();
}

function saveIDEState(){
  if(!ideReady)return;
  clearTimeout(draftSaveTimer);
  draftSaveTimer=setTimeout(()=>{
    editorDrafts[currentLang]=document.getElementById('code-editor').value;
    try{localStorage.setItem('vc_drafts_v1',JSON.stringify(editorDrafts));localStorage.setItem('vc_last_lang',currentLang);localStorage.setItem('vc_stdin_draft',document.getElementById('stdin-input').value);}catch(error){showToast('No se pudo guardar el borrador automáticamente');}
  },250);
}

function renderEditorHighlight(){
  const code=document.getElementById('code-editor')?.value||'';
  const output=document.getElementById('editor-highlight');
  if(!output)return;
  const language=currentLang;
  const pattern=language==='html'?/(<!--[^]*?-->|<\/?[A-Za-z][^>]*>|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g:/(\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+(?:\.\d+)?\b|\b(?:and|or|not|if|elif|else|for|while|def|return|class|try|except|finally|import|from|as|True|False|None|const|let|var|function|new|this|public|private|static|void|int|float|double|char|bool|string|String|boolean|return|using|namespace|include|auto|std|main|break|continue|switch|case|new|extends|implements|throw|catch|try|async|await)\b)/g;
  let cursor=0,html='',match;
  while((match=pattern.exec(code))){
    html+=escapeHTML(code.slice(cursor,match.index));
    const token=match[0];
    const cls=language==='html'&&token.startsWith('<')?'tok-tag':language==='html'&&/^['"]/.test(token)?'tok-string':token.startsWith('//')||token.startsWith('/*')||token.startsWith('#')?'tok-comment':/^['"`]/.test(token)?'tok-string':/^\d/.test(token)?'tok-number':'tok-keyword';
    html+=`<span class="${cls}">${escapeHTML(token)}</span>`;cursor=pattern.lastIndex;
  }
  html+=escapeHTML(code.slice(cursor));
  output.innerHTML=html+'\n';
  syncScroll();
}

function updateLineNumbers(){
  const ta=document.getElementById('code-editor');
  const lines=ta.value.split('\n').length;
  const ln=document.getElementById('line-numbers');
  ln.innerHTML=Array.from({length:lines},(_,i)=>`<span>${i+1}</span>`).join('');
}

function syncScroll(){
  const ta=document.getElementById('code-editor');
  document.getElementById('line-numbers').style.marginTop=(-ta.scrollTop)+'px';
  const highlight=document.getElementById('editor-highlight');
  if(highlight)highlight.style.transform=`translate(${-ta.scrollLeft}px, ${-ta.scrollTop}px)`;
}

function handleEditorKey(e){
  const suggestionBox=document.getElementById('editor-suggestions');
  if((e.ctrlKey||e.metaKey)&&e.code==='Space'){e.preventDefault();showAutocomplete(true);return;}
  if(!suggestionBox.hidden&&activeSuggestions.length){
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();activeSuggestionIndex=(activeSuggestionIndex+(e.key==='ArrowDown'?1:-1)+activeSuggestions.length)%activeSuggestions.length;renderSuggestionButtons();return;}
    if(e.key==='Enter'){e.preventDefault();insertSuggestion(activeSuggestionIndex);return;}
    if(e.key==='Escape'){hideAutocomplete();return;}
  }
  if(e.key==='Tab'){
    e.preventDefault();
    const ta=e.target;const s=ta.selectionStart,en=ta.selectionEnd;
    ta.value=ta.value.substring(0,s)+'    '+ta.value.substring(en);
    ta.selectionStart=ta.selectionEnd=s+4;
    onEditorInput();
  }
  if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();runCode();}
}

const EDITOR_SUGGESTIONS={
  python:['print','input','def','return','if','elif','else','for','while','range','try','except','class','import','True','False','None'],
  javascript:['console.log','const','let','function','return','if','else','for','while','async','await','document.querySelector','addEventListener','Array','map','filter'],
  c:['#include <stdio.h>','int main(void)','printf','scanf','if','else','for','while','return','char','int','double'],
  cpp:['#include <iostream>','#include <string>','#include <vector>','std::cout','std::cin','int main()','if','else','for','while','class','return'],
  csharp:['using System;','class Program','static void Main()','Console.WriteLine','if','else','for','foreach','while','string','int','return'],
  java:['public class Main','public static void main(String[] args)','System.out.println','Scanner','if','else','for','while','class','String','int','return']
};
function showAutocomplete(force=false){
  const ta=document.getElementById('code-editor');
  const before=ta.value.slice(0,ta.selectionStart);
  const match=before.match(/[A-Za-z_#][\w.#<>]*$/);
  const prefix=match?match[0]:'';
  if(!force&&!prefix){hideAutocomplete();return;}
  const choices=EDITOR_SUGGESTIONS[currentLang]||[];
  activeSuggestions=choices.filter(item=>!prefix||item.toLowerCase().startsWith(prefix.toLowerCase())).slice(0,8);
  activeSuggestionIndex=0;
  renderSuggestionButtons();
  document.getElementById('editor-suggestions').hidden=activeSuggestions.length===0;
}
function renderSuggestionButtons(){
  const box=document.getElementById('editor-suggestions');
  box.replaceChildren(...activeSuggestions.map((item,index)=>{const button=document.createElement('button');button.type='button';button.textContent=item;button.className=index===activeSuggestionIndex?'suggestion-active':'';button.onmousedown=event=>event.preventDefault();button.onclick=()=>insertSuggestion(index);return button;}));
}
function hideAutocomplete(){document.getElementById('editor-suggestions').hidden=true;activeSuggestions=[];}
function insertSuggestion(index){
  const ta=document.getElementById('code-editor');const selected=activeSuggestions[index];if(!selected)return;
  const before=ta.value.slice(0,ta.selectionStart),after=ta.value.slice(ta.selectionEnd),match=before.match(/[A-Za-z_#][\w.#<>]*$/),start=match?ta.selectionStart-match[0].length:ta.selectionStart;
  ta.value=ta.value.slice(0,start)+selected+after;ta.focus();ta.selectionStart=ta.selectionEnd=start+selected.length;hideAutocomplete();onEditorInput();
}
function handleEditorAutocomplete(event){if((event.ctrlKey||event.metaKey)&&event.code==='Space')return;if(event.key==='Escape'){hideAutocomplete();return;}if(event.key.length===1||event.key==='Backspace')showAutocomplete(false);}

function clearAll(){
  setEditorCode(TEMPLATES[currentLang]);
  clearConsole();
  setStatus('ready');
}

function clearConsole(){
  document.getElementById('console-body').innerHTML='<span class="console-empty">La salida del programa aparecerá aquí...</span>';
  document.getElementById('status-exit').textContent='Exit: —';
  document.getElementById('status-time').textContent='Tiempo: —';
}

function saveRunnerSettings(){
  const input=document.getElementById('runner-endpoint');
  try{
    const url=new URL(input.value.trim());
    if(url.protocol!=='https:'&&url.hostname!=='localhost'&&url.hostname!=='127.0.0.1')throw new Error('Usa HTTPS o un servidor local.');
    runnerEndpoint=url.toString().replace(/\/$/,'');localStorage.setItem('vc_runner_endpoint',runnerEndpoint);
    runnerToken=document.getElementById('runner-token').value.trim();showToast('Endpoint guardado. El token solo se conserva mientras esta pestaña esté abierta.');
  }catch(error){showToast(error.message||'Escribe una URL válida para Judge0.');}
}

async function runJudge0(code,stdinLines){
  if(!runnerEndpoint)throw new Error('Configura primero un endpoint Judge0 compatible en ⚙ Compilador remoto.');
  if(!confirm(`Se enviarán el código y la entrada estándar a ${runnerEndpoint} para compilar y ejecutar. ¿Deseas continuar?`))throw new Error('Ejecución remota cancelada.');
  const headers={'Content-Type':'application/json'};runnerToken=document.getElementById('runner-token').value.trim();if(runnerToken)headers['X-Auth-Token']=runnerToken;
  const response=await fetch(runnerEndpoint+'/languages',{headers:{...(runnerToken?{'X-Auth-Token':runnerToken}:{})}});
  if(!response.ok)throw new Error(`Judge0 no pudo listar lenguajes (HTTP ${response.status}). Comprueba endpoint, token y CORS.`);
  const languages=await response.json();
  const names={c:['C (GCC 9.2.0)','C (GCC 8.3.0)','C'],cpp:['C++ (GCC 9.2.0)','C++ (GCC 8.3.0)','C++'],csharp:['C# (Mono 6.6.0.161)','C# (Mono 6.8.0.105)','C#'],java:['Java (OpenJDK 13.0.1)','Java (OpenJDK 11.0.6)','Java']};
  const wanted=names[currentLang]||[];const language=languages.find(item=>wanted.includes(item.name))||languages.find(item=>wanted.some(name=>item.name.startsWith(name.split(' (')[0])));
  if(!language)throw new Error(`El servidor Judge0 no ofrece ${LANG_META[currentLang].name}.`);
  const created=await fetch(runnerEndpoint+'/submissions?base64_encoded=false&wait=false',{method:'POST',headers,body:JSON.stringify({source_code:code,language_id:language.id,stdin:stdinLines.join('\n')})});
  if(!created.ok)throw new Error(`Judge0 rechazó el envío (HTTP ${created.status}).`);
  const {token}=await created.json();if(!token)throw new Error('Judge0 no devolvió el identificador de ejecución.');
  const started=Date.now();
  while(Date.now()-started<60000){
    await new Promise(resolve=>setTimeout(resolve,900));
    const polled=await fetch(runnerEndpoint+'/submissions/'+encodeURIComponent(token)+'?base64_encoded=false&fields=stdout,stderr,compile_output,status,time',{headers:runnerToken?{'X-Auth-Token':runnerToken}:{}});
    if(!polled.ok)throw new Error(`No se pudo consultar el resultado (HTTP ${polled.status}).`);
    const data=await polled.json();if(data.status?.id>2)return{stdout:data.stdout||'',stderr:[data.compile_output,data.stderr].filter(Boolean).join('\n'),exitCode:data.status.id===3?0:1};
  }
  throw new Error('Judge0 no terminó en 60 segundos.');
}

function executeJavaScript(code,stdinLines){
  return new Promise((resolve,reject)=>{
    let worker;
    try{worker=new Worker(new URL('javascript-runner.js',document.baseURI));}
    catch(error){reject(new Error('JavaScript necesita abrirse desde el servidor local de la academia.'));return;}
    let done=false;
    const finish=(callback,value)=>{if(done)return;done=true;clearTimeout(timer);worker.terminate();callback(value);};
    const timer=setTimeout(()=>finish(reject,new Error('Se agotó el límite de 10 segundos.')),JAVASCRIPT_RUN_TIMEOUT_MS);
    worker.onmessage=event=>{if(event.data?.type==='result')finish(resolve,event.data.result);else finish(reject,new Error('Respuesta inválida del motor JavaScript.'));};
    worker.onerror=event=>finish(reject,new Error(event.message||'No se pudo iniciar el motor JavaScript.'));
    worker.postMessage({code,stdin:stdinLines});
  });
}

function copyCode(){
  navigator.clipboard.writeText(document.getElementById('code-editor').value).then(()=>{showToast('Código copiado ✓');});
}

function copyOutput(){
  const body=document.getElementById('console-body');
  const text=Array.from(body.querySelectorAll('.console-line')).map(el=>el.textContent).join('\n');
  navigator.clipboard.writeText(text).then(()=>{showToast('Salida copiada ✓');});
}

function showToast(msg){
  const t=document.createElement('div');
  t.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#3FB950;color:#0D1117;padding:8px 20px;border-radius:99px;font-size:13px;font-weight:700;z-index:9999;animation:fadeIn .2s';
  t.textContent=msg;document.body.appendChild(t);
  setTimeout(()=>t.remove(),2000);
}

function setStatus(state,msg){
  const stat=document.getElementById('ide-stat');
  const dot=stat.querySelector('.ide-stat-dot');
  const span=stat.querySelector('span');
  if(state==='running'){dot.className='ide-stat-dot dot-run';span.textContent=msg||'Ejecutando...';}
  else if(state==='ok'){dot.className='ide-stat-dot dot-ok';span.textContent=msg||'Completado';}
  else if(state==='error'){dot.className='ide-stat-dot dot-err';span.textContent=msg||'Error';}
  else{dot.className='ide-stat-dot dot-ok';span.textContent='Listo';}
}

function appendConsole(text,cls){
  const body=document.getElementById('console-body');
  const empty=body.querySelector('.console-empty');if(empty)empty.remove();
  const lines=(text||'').split('\n');
  lines.forEach((line,i)=>{
    if(i===lines.length-1&&line==='')return;
    const span=document.createElement('span');
    span.className='console-line '+cls;
    span.textContent=line;
    body.appendChild(span);
  });
  body.scrollTop=body.scrollHeight;
}

// ── PYTHON SIMULATOR ────────────────────────────────────────
function simulatePython(code,stdinLines){
  const output=[];const errors=[];let inputIdx=0;let exitCode=0;

  // Build print function
  function pyPrint(...args){
    const sep=' ',end='\n';
    let result=args.map(a=>{
      if(a===null||a===undefined)return'None';
      if(a===true)return'True';if(a===false)return'False';
      if(Array.isArray(a))return'['+a.map(x=>pyRepr(x)).join(', ')+']';
      if(typeof a==='object')return JSON.stringify(a);
      return String(a);
    }).join(sep)+end;
    output.push(result);
    return result;
  }
  function pyRepr(v){if(typeof v==='string')return"'"+v+"'";if(v===true)return'True';if(v===false)return'False';if(v===null)return'None';return String(v);}
  function pyInput(prompt){if(prompt)output.push(prompt);if(inputIdx<stdinLines.length)return stdinLines[inputIdx++];return'';}
  function pyRange(start,stop,step){
    if(stop===undefined){stop=start;start=0;}if(step===undefined)step=1;
    const r=[];for(let i=start;step>0?i<stop:i>stop;i+=step)r.push(i);return r;
  }
  function pyLen(x){if(typeof x==='string'||Array.isArray(x))return x.length;if(x instanceof Set)return x.size;if(x instanceof Map)return x.size;return 0;}
  function pyInt(x){const n=parseInt(x);if(isNaN(n))throw new Error(`ValueError: invalid literal for int() with base 10: '${x}'`);return n;}
  function pyFloat(x){const n=parseFloat(x);if(isNaN(n))throw new Error(`ValueError: could not convert string to float: '${x}'`);return n;}
  function pyStr(x){return String(x);}
  function pyType(x){if(x===null)return'<class \'NoneType\'>';if(typeof x==='boolean')return'<class \'bool\'>';if(typeof x==='number')return Number.isInteger(x)?'<class \'int\'>':'<class \'float\'>';if(typeof x==='string')return'<class \'str\'>';if(Array.isArray(x))return'<class \'list\'>';if(x instanceof Set)return'<class \'set\'>';if(x instanceof Map)return'<class \'dict\'>';return'<class \'object\'>';}
  function pyAbs(x){return Math.abs(x);}
  function pyMax(...args){return Math.max(...args.flat());}
  function pyMin(...args){return Math.min(...args.flat());}
  function pySum(arr){return arr.reduce((a,b)=>a+b,0);}
  function pySorted(arr,reverse=false){const s=[...arr].sort((a,b)=>a<b?-1:a>b?1:0);return reverse?s.reverse():s;}
  function pyReversed(arr){return[...arr].reverse();}
  function pyEnumerate(arr,start=0){return arr.map((v,i)=>[i+start,v]);}
  function pyZip(...arrs){const len=Math.min(...arrs.map(a=>a.length));return Array.from({length:len},(_,i)=>arrs.map(a=>a[i]));}
  function pyMap(fn,arr){return arr.map(fn);}
  function pyFilter(fn,arr){return arr.filter(fn);}
  function pyList(x){if(Array.isArray(x))return x;if(x instanceof Set)return[...x];if(typeof x==='string')return[...x];return[];}
  function pySet(x){if(Array.isArray(x))return new Set(x);return new Set();}
  function pyDict(pairs){return Object.fromEntries(pairs||[]);}

  // Transform Python syntax to JS
  let js=code;

  // f-strings: f"..." or f'...'
  js=js.replace(/f"([^"]*)"/g,(_,s)=>'`'+s.replace(/\{([^}]+)\}/g,'${$1}')+'`');
  js=js.replace(/f'([^']*)'/g,(_,s)=>'`'+s.replace(/\{([^}]+)\}/g,'${$1}')+'`');

  // print(*args) → pyPrint(*args)
  js=js.replace(/\bprint\s*\(/g,'pyPrint(');
  // input(prompt) → pyInput(prompt)
  js=js.replace(/\binput\s*\(/g,'pyInput(');
  // range(...) → pyRange(...)
  js=js.replace(/\brange\s*\(/g,'pyRange(');
  // len(x) → pyLen(x)
  js=js.replace(/\blen\s*\(/g,'pyLen(');
  // int(x) → pyInt(x)
  js=js.replace(/\bint\s*\(/g,'pyInt(');
  // float(x) → pyFloat(x)
  js=js.replace(/\bfloat\s*\(/g,'pyFloat(');
  // str(x) → pyStr(x)
  js=js.replace(/\bstr\s*\(/g,'pyStr(');
  // type(x) → pyType(x)
  js=js.replace(/\btype\s*\(/g,'pyType(');
  // abs, max, min, sum, sorted, reversed, enumerate, zip, map, filter, list, set
  js=js.replace(/\babs\s*\(/g,'pyAbs(');
  js=js.replace(/\bmax\s*\(/g,'pyMax(');
  js=js.replace(/\bmin\s*\(/g,'pyMin(');
  js=js.replace(/\bsum\s*\(/g,'pySum(');
  js=js.replace(/\bsorted\s*\(/g,'pySorted(');
  js=js.replace(/\breversed\s*\(/g,'pyReversed(');
  js=js.replace(/\benumerate\s*\(/g,'pyEnumerate(');
  js=js.replace(/\bzip\s*\(/g,'pyZip(');
  js=js.replace(/\bmap\s*\(/g,'pyMap(');
  js=js.replace(/\bfilter\s*\(/g,'pyFilter(');
  js=js.replace(/\blist\s*\(/g,'pyList(');
  js=js.replace(/\bset\s*\(/g,'pySet(');
  js=js.replace(/\bdict\s*\(/g,'pyDict(');

  // True/False/None
  js=js.replace(/\bTrue\b/g,'true');
  js=js.replace(/\bFalse\b/g,'false');
  js=js.replace(/\bNone\b/g,'null');

  // and/or/not
  js=js.replace(/\band\b/g,'&&');
  js=js.replace(/\bor\b/g,'||');
  js=js.replace(/\bnot\b/g,'!');

  // elif → else if
  js=js.replace(/\belif\b/g,'else if');

  // Python-style indentation → braces (simplified block conversion)
  const rawLines=js.split('\n');
  const jsLines=[];
  const indentStack=[0];
  const INDENT_RE=/^(\s*)/;

  for(let i=0;i<rawLines.length;i++){
    let line=rawLines[i];
    const trimmed=line.trim();
    if(trimmed===''||trimmed.startsWith('#')){jsLines.push(trimmed.startsWith('#')?'//'+trimmed.slice(1):'');continue;}

    const indent=INDENT_RE.exec(line)[1].length;
    const curIndent=indentStack[indentStack.length-1];

    if(indent>curIndent){indentStack.push(indent);}
    else{
      while(indentStack.length>1&&indent<indentStack[indentStack.length-1]){
        indentStack.pop();jsLines.push('}');
      }
    }

    // def → function
    line=line.replace(/^\s*def\s+(\w+)\s*\(([^)]*)\)\s*:/,(_,name,args)=>{
      // Convert default arg syntax  arg=val → arg=val (JS already handles this)
      return `function ${name}(${args}) {`;
    });
    // class → class (simplified)
    line=line.replace(/^\s*class\s+(\w+)(?:\((\w+)\))?\s*:/,(_,name,parent)=>{
      return parent?`class ${name} extends ${parent} {`:`class ${name} {`;
    });
    // def __init__ → constructor
    line=line.replace(/function __init__\(self(?:,\s*)?/,'constructor(');
    line=line.replace(/function (\w+)\(self(?:,\s*)?/,'$1(');
    // self. → this.
    line=line.replace(/\bself\./g,'this.');
    // self → this (standalone)
    line=line.replace(/\bself\b/g,'this');
    // super().__init__( → super(
    line=line.replace(/super\(\)\.__init__\s*\(/g,'super(');

    // for item in list → for (const item of list)
    line=line.replace(/^\s*for\s+(\w+)\s+in\s+(.+?)\s*\{/,(_,v,iter)=>`for (const ${v} of ${iter}) {`);
    // for i, v in enumerate(...) → for (const [i,v] of ...)
    line=line.replace(/^\s*for\s+(\w+),\s*(\w+)\s+in\s+(.+?)\s*\{/,(_,a,b,iter)=>`for (const [${a},${b}] of ${iter}) {`);

    // while condition: → while (condition) {
    line=line.replace(/^\s*(while\s+.+?)\s*\{/,(_,w)=>`${w}) {`.replace('while ','while ('));

    // if/elif/else
    line=line.replace(/^\s*((?:else\s+)?if\s+.+?)\s*\{/,(_,c)=>`${c}) {`.replace(/^(else\s+)?if /,'$1if ('));
    line=line.replace(/^\s*else\s*\{/,'else {');

    // .append( → .push(
    line=line.replace(/\.append\s*\(/g,'.push(');
    // .remove( → (simplified — filter)
    // += shorthand stays
    // ** → Math.pow  (simplified)
    line=line.replace(/(\w+)\s*\*\*\s*(\w+)/g,'Math.pow($1,$2)');
    // // floor div
    line=line.replace(/(\w+)\s*\/\/\s*(\w+)/g,'Math.floor($1/$2)');
    // % stays the same

    // if __name__ == "__main__": → (call main directly)
    if(trimmed.includes('__name__')&&trimmed.includes('__main__')){
      jsLines.push('');
      jsLines.push('// auto-run main');
      continue;
    }
    // main() call
    if(trimmed==='main()'){jsLines.push('main();');continue;}

    jsLines.push(line);
  }
  // Close remaining open blocks
  while(indentStack.length>1){indentStack.pop();jsLines.push('}');}

  const finalJS=jsLines.join('\n');

  try{
    const fn=new Function(
      'pyPrint','pyInput','pyRange','pyLen','pyInt','pyFloat','pyStr','pyType',
      'pyAbs','pyMax','pyMin','pySum','pySorted','pyReversed','pyEnumerate','pyZip',
      'pyMap','pyFilter','pyList','pySet','pyDict',
      finalJS
    );
    fn(pyPrint,pyInput,pyRange,pyLen,pyInt,pyFloat,pyStr,pyType,
       pyAbs,pyMax,pyMin,pySum,pySorted,pyReversed,pyEnumerate,pyZip,
       pyMap,pyFilter,pyList,pySet,pyDict);
  }catch(e){
    errors.push(e.message||String(e));exitCode=1;
  }

  return{stdout:output.join(''),stderr:errors.join('\n'),exitCode};
}

// ── C++ SIMULATOR (pattern matching) ────────────────────────
function simulateCpp(code,stdinLines){
  const output=[];const errors=[];let inputIdx=0;let exitCode=0;

  // Extract variables, cout statements, cin
  const vars={};

  // Simple: run through lines
  const lines=code.split('\n').map(l=>l.trim()).filter(l=>l&&!l.startsWith('//'));

  // Check for compilation errors
  if(!code.includes('int main')){errors.push('error: undefined reference to `main\'');return{stdout:'',stderr:errors.join('\n'),exitCode:1};}
  if(code.includes('cout')&&!code.includes('#include')){errors.push('error: \'cout\' was not declared (missing #include <iostream>)');return{stdout:'',stderr:errors.join('\n'),exitCode:1};}

  // Extract strings from cout (simplified executor)
  let js='';

  // Transform C++ to JS (simplified)
  let jsCode=code;
  // Remove includes, using namespace, etc
  jsCode=jsCode.replace(/#include\s*<[^>]+>/g,'');
  jsCode=jsCode.replace(/using namespace std;/g,'');
  // cout → output
  jsCode=jsCode.replace(/cout\s*<<\s*/g,'_cout_(');
  jsCode=jsCode.replace(/\s*<<\s*endl/g,',true)');
  jsCode=jsCode.replace(/\s*<<\s*"\\n"/g,',true)');
  jsCode=jsCode.replace(/\s*<<\s*'\\n'/g,',true)');
  jsCode=jsCode.replace(/\s*<<\s*([^;]+);/g,',$1);');
  // cin >> var
  jsCode=jsCode.replace(/cin\s*>>\s*(\w+)/g,'$1=_cin_()');
  // string → let
  jsCode=jsCode.replace(/\bstring\b/g,'let');
  jsCode=jsCode.replace(/\bint\b\s+(?=\w)/g,'let ');
  jsCode=jsCode.replace(/\bdouble\b\s+(?=\w)/g,'let ');
  jsCode=jsCode.replace(/\bfloat\b\s+(?=\w)/g,'let ');
  jsCode=jsCode.replace(/\bchar\b\s+(?=\w)/g,'let ');
  jsCode=jsCode.replace(/\bbool\b\s+(?=\w)/g,'let ');
  jsCode=jsCode.replace(/\blong\s+long\b\s+(?=\w)/g,'let ');
  // Remove return type from main
  jsCode=jsCode.replace(/let\s+main/g,'function _main_');
  jsCode=jsCode.replace(/int\s+main\s*\([^)]*\)/g,'function _main_()');
  // true/false stays the same
  // remove return 0;
  jsCode=jsCode.replace(/return\s+0\s*;/g,'');

  let coutBuffer='';
  function _cout_(...args){
    let newline=false;
    if(typeof args[args.length-1]==='boolean'){newline=args.pop();}
    const text=args.map(a=>a===null||a===undefined?'':String(a)).join('');
    coutBuffer+=text;
    if(newline){output.push(coutBuffer+'\n');coutBuffer='';}
  }
  function _cin_(){if(inputIdx<stdinLines.length)return stdinLines[inputIdx++];return'';}

  // Flush buffer at end
  try{
    const fn=new Function('_cout_','_cin_',jsCode+'\n_main_();if(typeof coutBuffer!=="undefined"&&coutBuffer){output.push(coutBuffer);}');
    fn(_cout_,_cin_);
    if(coutBuffer){output.push(coutBuffer);}
  }catch(e){
    // Try to give meaningful error
    const msg=e.message||String(e);
    errors.push('Compilation error: '+msg);exitCode=1;
  }

  return{stdout:output.join(''),stderr:errors.join('\n'),exitCode};
}

// ── JAVA SIMULATOR (pattern matching) ────────────────────────
function simulateJava(code,stdinLines){
  const output=[];const errors=[];let inputIdx=0;let exitCode=0;

  if(!code.includes('public class Main')){errors.push('error: class Main not found');return{stdout:'',stderr:errors.join('\n'),exitCode:1};}
  if(!code.includes('public static void main')){errors.push('error: main method not found');return{stdout:'',stderr:errors.join('\n'),exitCode:1};}

  let jsCode=code;
  // Remove import statements
  jsCode=jsCode.replace(/import\s+[^;]+;/g,'');
  // println / print
  jsCode=jsCode.replace(/System\.out\.println\s*\(/g,'_println_(');
  jsCode=jsCode.replace(/System\.out\.print\s*\(/g,'_print_(');
  jsCode=jsCode.replace(/System\.err\.println\s*\(/g,'_errln_(');
  // Scanner
  jsCode=jsCode.replace(/Scanner\s+(\w+)\s*=\s*new\s+Scanner[^;]+;/g,'const $1={};');
  jsCode=jsCode.replace(/(\w+)\.nextLine\s*\(\s*\)/g,'_cin_()');
  jsCode=jsCode.replace(/(\w+)\.next\s*\(\s*\)/g,'_cin_()');
  jsCode=jsCode.replace(/(\w+)\.nextInt\s*\(\s*\)/g,'parseInt(_cin_())');
  jsCode=jsCode.replace(/(\w+)\.nextDouble\s*\(\s*\)/g,'parseFloat(_cin_())');
  jsCode=jsCode.replace(/(\w+)\.close\s*\(\s*\)/g,'');
  // Types
  jsCode=jsCode.replace(/\bString\b/g,'let');
  jsCode=jsCode.replace(/\bint\b\s+(?=\w)/g,'let ');
  jsCode=jsCode.replace(/\bdouble\b\s+(?=\w)/g,'let ');
  jsCode=jsCode.replace(/\bfloat\b\s+(?=\w)/g,'let ');
  jsCode=jsCode.replace(/\bboolean\b\s+(?=\w)/g,'let ');
  jsCode=jsCode.replace(/\bchar\b\s+(?=\w)/g,'let ');
  jsCode=jsCode.replace(/\blong\b\s+(?=\w)/g,'let ');
  // public class Main → (remove)
  jsCode=jsCode.replace(/public\s+class\s+Main\s*\{/,'');
  jsCode=jsCode.replace(/public\s+static\s+void\s+main\s*\([^)]*\)\s*\{/,'function _main_() {');
  jsCode=jsCode.replace(/\bpublic\s+/g,'');
  jsCode=jsCode.replace(/\bprivate\s+/g,'');
  jsCode=jsCode.replace(/\bstatic\s+/g,'');
  jsCode=jsCode.replace(/\bvoid\s+/g,'function ');
  jsCode=jsCode.replace(/\blet\s+function\s+/g,'function ');
  // String concatenation: Java uses + which JS also uses — same
  // true/false/null same

  function _println_(x){output.push(String(x===null?'null':x===true?'true':x===false?'false':x)+'\n');}
  function _print_(x){output.push(String(x===null?'null':x===true?'true':x===false?'false':x));}
  function _errln_(x){errors.push(String(x));}
  function _cin_(){if(inputIdx<stdinLines.length)return stdinLines[inputIdx++];return'';}

  try{
    const fn=new Function('_println_','_print_','_errln_','_cin_',jsCode+'\n_main_();');
    fn(_println_,_print_,_errln_,_cin_);
  }catch(e){
    const msg=e.message||String(e);
    errors.push('Runtime error: '+msg);exitCode=1;
  }

  return{stdout:output.join(''),stderr:errors.join('\n'),exitCode};
}

// ── MAIN RUN FUNCTION ────────────────────────────────────────
async function runCode(){
  if(isRunning)return;
  const code=document.getElementById('code-editor').value.trim();
  if(!code){appendConsole('⚠ El editor está vacío.','console-warn');return;}
  if(code.length>50000){appendConsole('⚠ El código es demasiado largo (máx 50 000 caracteres).','console-warn');return;}

  const stdinRaw=document.getElementById('stdin-input').value;
  const stdinLines=stdinRaw?stdinRaw.split('\n'):[];
  if(stdinLines.length&&stdinLines[stdinLines.length-1]==='')stdinLines.pop();

  isRunning=true;
  const runBtn=document.getElementById('run-btn');
  runBtn.disabled=true;runBtn.classList.add('running');runBtn.textContent='⏳ Ejecutando...';
  setStatus('running');
  clearConsole();

  const startTime=performance.now();

  let result;
  try{
    if(currentLang==='python') result=await runRealPython(code,stdinLines);
    else if(currentLang==='javascript') result=await executeJavaScript(code,stdinLines);
    else result=await runJudge0(code,stdinLines);
  }catch(e){
    result={stdout:'',stderr:'Error al ejecutar el código: '+e.message,exitCode:1};
  }

  const elapsed=((performance.now()-startTime)/1000).toFixed(3);

  // Render result banner
  const bannerClass=result.exitCode===0?'banner-ok':'banner-err';
  const bannerIcon=result.exitCode===0?'✓':'✕';
  const bannerText=result.exitCode===0?'Ejecución completada':'Error de ejecución';
  const body=document.getElementById('console-body');
  const empty=body.querySelector('.console-empty');if(empty)empty.remove();

  const banner=document.createElement('div');
  banner.className='result-banner '+bannerClass;
  banner.innerHTML=`<span>${bannerIcon} ${bannerText}</span><span style="margin-left:auto;font-size:11px;opacity:.8">Tiempo: ${elapsed} s  ·  Exit code: ${result.exitCode}</span>`;
  body.appendChild(banner);

  if(result.stdout) appendConsole(result.stdout,'console-stdout');
  if(result.stderr) appendConsole(result.stderr,'console-stderr');
  if(!result.stdout&&!result.stderr&&result.exitCode===0) appendConsole('(sin salida)','console-info');

  // Status bar
  document.getElementById('status-exit').textContent='Exit: '+result.exitCode;
  document.getElementById('status-time').textContent='Tiempo: '+elapsed+' s';
  setStatus(result.exitCode===0?'ok':'error');

  // History
  addToHistory(code,result,elapsed);

  isRunning=false;
  runBtn.disabled=false;runBtn.classList.remove('running');
  runBtn.innerHTML='▶ Ejecutar';
}

function runRealPython(code,stdinLines){
  return new Promise((resolve,reject)=>{
    try{if(!pythonWorker){pythonWorker=new Worker(new URL('python-runner.js',document.baseURI));}}
    catch(error){reject(new Error('El motor Python necesita abrir la academia desde un servidor local (por ejemplo, `py -m http.server 8000`), no mediante un archivo file://.'));return;}
    const worker=pythonWorker;
    const stopWorker=message=>{worker.terminate();if(pythonWorker===worker)pythonWorker=null;reject(new Error(message));};
    let timeout=setTimeout(()=>stopWorker('El motor Python tardó más de 2 minutos en iniciar o cargar los paquetes.'),PYTHON_STARTUP_TIMEOUT_MS);
    worker.onmessage=event=>{
      const data=event.data||{};
      if(data.type==='status'){
        document.getElementById('ide-stat').querySelector('span').textContent=data.message;
        clearTimeout(timeout);
        timeout=setTimeout(()=>stopWorker(data.phase==='running'?'Se agotó el tiempo máximo de ejecución de 30 segundos. Se detuvo el proceso.':'El motor Python tardó más de 2 minutos en iniciar o cargar los paquetes.'),data.phase==='running'?PYTHON_RUN_TIMEOUT_MS:PYTHON_STARTUP_TIMEOUT_MS);
        return;
      }
      clearTimeout(timeout);
      if(data.type==='result')resolve(data.result);else{worker.terminate();if(pythonWorker===worker)pythonWorker=null;reject(new Error(data.message||'No se pudo iniciar el entorno Python.'));}
    };
    worker.onerror=event=>{clearTimeout(timeout);worker.terminate();if(pythonWorker===worker)pythonWorker=null;reject(new Error(event.message||'No se pudo cargar Pyodide. Comprueba la conexión a internet y vuelve a intentarlo.'));};
    worker.postMessage({code,stdin:stdinLines});
  });
}

// ── PROJECTS ────────────────────────────────────────────────
function loadProjectsFromStorage(){
  projects=readStoredArray('vc_projects').filter(p=>p&&typeof p.name==='string'&&typeof p.code==='string'&&LANG_META[p.lang]);
}
function saveProjectsToStorage(){
  try{localStorage.setItem('vc_projects',JSON.stringify(projects));return true;}catch(e){showToast('No hay espacio disponible para guardar el proyecto');return false;}
}

function saveProject(){
  const name=document.getElementById('proj-name-input').value.trim();
  if(!name){showToast('Escribe un nombre para el proyecto');return;}
  const code=document.getElementById('code-editor').value;
  const previousProjects=projects.slice();
  const existing=projects.findIndex(p=>p.name===name);
  const proj={name,lang:currentLang,code,date:new Date().toLocaleDateString('es',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})};
  if(existing>=0)projects[existing]=proj;else projects.unshift(proj);
  if(!saveProjectsToStorage()){projects=previousProjects;return;}
  renderProjList();
  document.getElementById('proj-name-input').value='';
  showToast('Proyecto guardado ✓');
}

function exportProjects(){
  const active={name:document.getElementById('proj-name-input').value.trim()||`Borrador ${LANG_META[currentLang].name}`,lang:currentLang,code:document.getElementById('code-editor').value,date:new Date().toISOString()};
  const bundle={format:'academia-projects-v1',exportedAt:new Date().toISOString(),projects:[...projects.filter(p=>p.name!==active.name),active]};
  const blob=new Blob([JSON.stringify(bundle,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='mis-proyectos-academia.json';link.click();URL.revokeObjectURL(url);showToast('Archivo de proyectos exportado.');
}
async function importProjectsFile(event){
  const file=event.target.files?.[0];event.target.value='';if(!file)return;
  if(file.size>2_000_000){showToast('El archivo supera el límite de 2 MB.');return;}
  try{
    const bundle=JSON.parse(await file.text());if(bundle.format!=='academia-projects-v1'||!Array.isArray(bundle.projects))throw new Error('El archivo no tiene el formato de exportación de la academia.');
    if(bundle.projects.length>100)throw new Error('El archivo contiene más de 100 proyectos.');
    const imported=bundle.projects.map(p=>{if(!p||typeof p.name!=='string'||!LANG_META[p.lang]||typeof p.code!=='string'||p.code.length>200000)throw new Error('Hay un proyecto con datos inválidos o demasiado grandes.');return{name:p.name.slice(0,100),lang:p.lang,code:p.code,date:typeof p.date==='string'?p.date:new Date().toLocaleDateString('es')};});
    const merged=projects.slice();for(const project of imported){const index=merged.findIndex(item=>item.name===project.name);if(index>=0)merged[index]=project;else merged.unshift(project);}
    const before=projects;projects=merged;if(!saveProjectsToStorage()){projects=before;return;}renderProjList();showToast(`Importados ${imported.length} proyectos.`);
  }catch(error){showToast(error.message||'No se pudo leer el archivo JSON.');}
}

function loadProject(idx){
  const p=projects[idx];
  if(!p)return;
  document.getElementById('lang-select').value=p.lang;
  changeLang(false);
  setEditorCode(p.code);
  toggleProjects();showToast('Proyecto cargado: '+p.name);
}

function deleteProject(idx){
  projects.splice(idx,1);saveProjectsToStorage();renderProjList();
}

function renderProjList(){
  const list=document.getElementById('proj-list');
  if(projects.length===0){list.innerHTML='<div style="padding:20px;text-align:center;color:var(--ide-text-2);font-size:13px">No hay proyectos guardados</div>';return;}
  list.innerHTML=projects.map((p,i)=>`
    <div class="proj-item">
      <div class="proj-item-name">${escapeHTML(p.name)}</div>
      <div class="proj-item-meta">${escapeHTML(LANG_META[p.lang]?.name||p.lang)} · ${escapeHTML(p.date)}</div>
      <div class="proj-item-actions">
        <button class="proj-action-btn load" onclick="loadProject(${i})">📂 Cargar</button>
        <button class="proj-action-btn del" onclick="deleteProject(${i})">🗑 Eliminar</button>
      </div>
    </div>`).join('');
}

function toggleProjects(){
  document.getElementById('projects-panel').classList.toggle('open');
}

// ── HISTORY ─────────────────────────────────────────────────
function addToHistory(code,result,time){
  const snapshot=code.split('\n').slice(0,2).join(' ').slice(0,60);
  execHistory.unshift({lang:currentLang,snippet:snapshot,code,exitCode:result.exitCode,time,date:new Date().toLocaleTimeString('es')});
  if(execHistory.length>30)execHistory.pop();
  try{localStorage.setItem('vc_history',JSON.stringify(execHistory));}catch(error){showToast('No se pudo guardar el historial');}
  renderHistoryList();
}

function renderHistoryList(){
  const list=document.getElementById('history-list');
  if(execHistory.length===0){list.innerHTML='<div style="padding:20px;text-align:center;color:var(--ide-text-2);font-size:13px">Sin historial aún</div>';return;}
  list.innerHTML=execHistory.map((h,i)=>`
    <div class="history-item" onclick="loadHistoryItem(${i})">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
        <span class="history-lang" style="background:${h.exitCode===0?'rgba(63,185,80,.2)':'rgba(248,81,73,.2)'};color:${h.exitCode===0?'#3FB950':'#F85149'}">${LANG_META[h.lang].badge}</span>
        <span style="font-size:12px;color:var(--ide-text);font-family:var(--mono);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px">${escapeHTML(h.snippet)}</span>
      </div>
      <div class="history-meta">Exit ${escapeHTML(h.exitCode)} · ${escapeHTML(h.time)}s · ${escapeHTML(h.date)}</div>
    </div>`).join('');
}

function loadHistoryItem(i){
  const item=execHistory[i];
  if(!item||typeof item.code!=='string'||!LANG_META[item.lang])return;
  document.getElementById('lang-select').value=item.lang;
  changeLang(false);
  setEditorCode(item.code);
  toggleProjects();
  showToast('Ejecución restaurada en el editor');
}

function switchSideTab(tab,btn){
  document.querySelectorAll('.side-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('side-projects').style.display=tab==='projects'?'block':'none';
  document.getElementById('side-history').style.display=tab==='history'?'flex':'none';
  if(tab==='history') document.getElementById('side-history').style.flexDirection='column';
}

// ═══════════════════════════════════════════════════════════
//  APP INIT
// ═══════════════════════════════════════════════════════════
renderTopics();
renderQuizTopicBtns();
renderGlosario();
renderLearningDashboard();

// Keyboard shortcut: Ctrl+Enter anywhere in compiler = run
document.addEventListener('keydown',function(e){
  if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){
    if(document.getElementById('s-compiler').classList.contains('active')) runCode();
  }
});
