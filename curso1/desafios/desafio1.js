const gasolina = 5.5;
let carro = 10;
let distancia = 275;


const litrosConsumidos = distancia / carro;
const total = litrosConsumidos * gasolina;
console.log(total)
console.log(total.toFixed(2))
