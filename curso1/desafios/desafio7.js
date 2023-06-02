const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
let total = (quantidadeHamburguer * valorHamburguer) + (quantidadeBebida * valorBebida);
//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.
let troco = valorPago - total;
//TODO: Imprimir a saída no formato especificado neste desafio.
console.log(`O preço final do pedido é ${total.tofixed(2)}, Seu troco é ${troco.tofixed(2)}`);