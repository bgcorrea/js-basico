var estudiantes = ["María", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

// La función consiste en que cada vez que estudiantes.length sea mayor a 0, se ejecutará el while
// Mientras el while se ejecuta, shift sacará los nombres hasta que se deje de cumplir que es > a 0.

while(estudiantes.length > 0){
    // console.log(estudiantes) para visualizar la eliminación de nombres.
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}