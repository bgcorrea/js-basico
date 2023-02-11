var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"]; // Array clásico
console.log(frutas)
console.log(frutas.length)
console.log(frutas[0]) 
console.log(frutas[1]) 
console.log(frutas[2]) 
console.log(frutas[3])


var masFrutas = frutas.push("Uvas");
// var masFrutas = frutas.push(["Peras", "Naranjas"]); // Se agregan elementos al final del array
console.log(masFrutas)

var ultimo = frutas.pop("Uvas") // Quitar el último valor del array
console.log(frutas)

var nuevaLongitud = frutas.unshift("Uvas") // Se agregan elementos al inicio del array
console.log(frutas)


var borrarFruta = frutas.shift("Uvas") // Se elimina el primer elemento del array
console.log(frutas)

// Si mando a eliminar un elemento que no está al inicio con shift, este no se borrará.

var posicion = frutas.indexOf("Cerezas") // Consultar la ubicación de un elemento en el array.
console.log(posicion)


