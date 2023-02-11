// Inicializamos un array con nombres de estudiantes.

var estudiantes = ["Pedro", "Juan", "Diego"] 

// Creamos la función para saludar estudiantes.

function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`)
}

// For es recorrer un bloque de código varias veces
// Generando un for que tiene una variable inicial de 0 y mientras la variable sea inferior al length
// Debe saludar. 

for (var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// Otra forma de hacer el loop

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}

//for of: neceistamos inicializar una variable en singular de nuestro array que está en plural.