console.log("exercicio 1")

class Carro{
   marca;
   cor;
   kmPorLitro;

   constructor(marca, cor, kmPorLitro) {
    this.marca = marca
    this.cor = cor
    this.kmPorLitro = kmPorLitro
   }

   gasto(kmRodado, gasolina) {
    return kmRodado * this.kmPorLitro * gasolina
   }
}

let carro = new Carro("volkswagen", "prata", 1/10)
carro.gasto(100, 5.50)
console.log(carro.gasto(100, 5.50).toFixed(2))

console.log("---------------------------------------------")

console.log("exercicio 2")

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calculoIMC() {
        return (this.peso / (this.altura * this.altura))
    }

    classificarIMC() {
        const imc = this.calculoIMC()

        if(imc < 18.50) {
            return " Abaixo do peso";
        } else if(imc > 18.50 && imc < 25) {
            return " Peso ideal"
        } else {
            return " Acima do peso"
        }
    }
}

let pessoa = new Pessoa("Gabriel", 65, 1.70)
console.log(pessoa)
console.log("IMC: " + pessoa.calculoIMC().toFixed(2) + pessoa.classificarIMC())

let leticia = new Pessoa("Leticia", 49, 1.48)
console.log(leticia)
console.log("IMC: " + leticia.calculoIMC().toFixed(2) + leticia.classificarIMC())



