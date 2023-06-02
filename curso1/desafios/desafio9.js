const valorHamburguer = hamburguer(gets());
const quantidadeHamburguer = qtdHamburguer(gets());
const valorBebida = valorDaBebida(gets());
const quantidadeBebida = qtdBebida(gets());
const valorPago = total(gets());

console.log(`O preço final do pedido é R$ ${valorPago.toFixed(2)}. Seu troco é R$ ${gets().toFixed(2)}.`)

function hamburguer() {
    let preçoHamburguer = 8.00
    return preçoHamburguer
}

function qtdHamburguer() {
    let quantHamburguer = 1
    return quantHamburguer
}

function valorDaBebida() {
    let preçoBebida = 4.00
    return preçoBebida
}

function qtdBebida() {
    let quantBebida = 4
    return quantBebida
}

function total() {
    return ((hamburguer() * qtdHamburguer()) + (valorDaBebida() * qtdBebida()))
}

function gets() {
    let troco = 50
    return (troco - total())
}