// Creamos la variable

var articulos = [
    { nombre: "Bici", costo: 3000  },
    { nombre: "Televisión", costo:2500 },
    { nombre: "Libro", costo:320 },
    { nombre: "Celular", costo:10000 },
    { nombre: "Laptop", costo:2500 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// Dos formas de filtrar: filter y map.

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

console.log(articulosFiltrados)

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre

})

console.log(nombreArticulos)

// find para buscar un valor en específico. Devuelve todos los atributos del valor. (encuentra el primeron y abort)

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

console.log(encuentraArticulo)

// for each devuelve todos los valores de la variable que estoy solicitando.

var paraCadaArticulo = articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

console.log(paraCadaArticulo)

// some sirve para consultar si es true or false alguna condición que establezcamos (boolean).

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos)

4=="4"