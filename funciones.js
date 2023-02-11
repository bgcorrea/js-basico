// Declarativas

function miFuncion() {
    return 3;
}

// Expresivas

var miFuncion = function(a, b) {
    return a + b;
}

function saludarEstudiante (estudiante) {
    console.log('Hola ${estudiante}');
}
saludarEstudiante ("Benja")

function sumar(a, b){
    var resultado = a + b;
    return resultado
}

function sumar(a,b) {
    return a + b;

}


function bienvenido (a) {
    return a
}

bienvenido("Benjamín")

var a = 4 + "7";
var b = 4*"7"
typeof b

// coherción

var a = 20
var b = a + "";
