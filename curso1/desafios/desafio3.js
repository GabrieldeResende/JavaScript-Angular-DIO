console.log("Exercicio 1")
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7) {
    console.log("Aprovado: ", media)
} else if(media >= 5 && media < 7) {
    console.log("Recuperação: ", media)
} else {
    console.log("Reprovado: ", media)
}

console.log("-------------------------------------------")
console.log("Exercicio 2")

let peso = 90;
let altura = 1.70;
const imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if(imc > 18.5 && imc <= 25) {
    console.log("peso ideal")
} else {
    console.log("Acima do peso")
}
console.log("-------------------------------------------")
console.log("Exercicio 3")

let produto = 50
const debito = produto - ((produto * 10) / 100)
const dinheiroOuPix = produto - ((produto * 15) / 100)
const parcela2 = produto / 2
const parcela3 = (produto + ((produto * 10) / 100)) / 3
let formaPagamento = "4";

if(formaPagamento === "1") {
    console.log("valor total do produto: ", debito)
} else if (formaPagamento === "2" || formaPagamento === "pix") {
    console.log("valor total do produto: ", dinheiroOuPix)
} else if (formaPagamento === "3") {
    console.log("valor total das parcelas: ", parcela2)
} else {
    console.log("valor total das parcelas: ", parcela3)
}
