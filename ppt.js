var tijera = "tijera";
var piedra = "piedra";
var papel = "papel";


var juego = function Game(Usuario,Maquina) {
    switch(true){
        //Usuario con tijera
        case (Usuario===tijera && Maquina===tijera):
            console.log("Empate");
            break;
        case (Usuario===tijera && Maquina===piedra):
            console.log("Perdiste");
            break;
        case (Usuario===tijera && Maquina===papel):
            console.log("Ganaste");
            break;

        //Usuario con piedra
        case (Usuario===piedra && Maquina===piedra):
            console.log("Empate");
            break;
        case (Usuario===piedra && Maquina===papel):
            console.log("Perdiste");
            break;
        case (Usuario===piedra && Maquina===tijera):
            console.log("Ganaste");
            break

        //Usuario con papel
        case (Usuario===papel && Maquina===papel):
            console.log("Empate");
            break;
        case (Usuario===papel && Maquina===tijera):
            console.log("Perdiste");
            break;
        default:
            console.log("Ganaste");
        
    }   
    
    
}

juego(piedra,tijera)

