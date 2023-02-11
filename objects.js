var miAuto = {
    marca: "Opel",
    modelo: "Mokka",
    agno: 2022,
    detalleDelAuto: function (){
        console.log(`Auto ${this.modelo} ${this.agno}`)
    }
};

// Buscando algún valor en específico .

console.log(miAuto.marca)
console.log(miAuto.modelo)
console.log(miAuto.agno)

// Buscar la función al interior de un objeto.

console.log(miAuto.detalleDelAuto());

// Función constructora para grandes cantidades de datos

function auto(marca, modelo, agno){
    this.marca = marca;  // Función llamada auto que tendrá las propiedades de mi objeto. This como referencia a mi función constructora.
    this.modelo = modelo;
    this.agno = agno;

}

console.log(auto)

var autoNuevo = new auto("Tesla", "Model 3", 2020);
console.log(autoNuevo)

var autoNuevo2 = new auto("Mitsubishi", "l200", 1998)
var autoNuevo3 = new auto("Toyota", "x-trail", 2022)
var autoNuevo4 = new auto("Volkswagen", "gol", 2018)
var autoNuevo5 = new auto("Ram", "1000", 2021)


  var autos = [];
for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }