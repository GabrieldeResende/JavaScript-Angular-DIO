const gasolina = 5.5;
const etanol = 3.70;
let gastoComGasolina = 10;
let gastoComEtanol = 12;
let distancia = 275;
tipoCarro = "Etanol"

if(tipoCarro === "Etanol") {
    console.log( "Etanol", (distancia / gastoComEtanol * (etanol)).toFixed(2))
} else {
    console.log("Gasolina", (distancia / gastoComEtanol * (gasolina)).toFixed(2))
}
