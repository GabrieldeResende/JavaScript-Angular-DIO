const valorPedido = parseInt(gets());

if(valorPedido >= 50.00) {
    console.log("Parabens, você ganhou uma sobremesa gratis!")
} else {
    console.log("Que pena, você nao ganhou nenhum brinde especial.")
}

function gets() {
    let valorDoPedido = 60
    return valorDoPedido
}