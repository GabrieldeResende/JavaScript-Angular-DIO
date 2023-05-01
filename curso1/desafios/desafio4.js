console.log("--------------------------------")
console.log("Exercicio 1")
function verificarIdade(idade) {
    return idade < 18 ? "Menor de idade" : "Maior de idade";
}

let verificar = verificarIdade(15)
console.log(verificar)

verificar = verificarIdade(30)
console.log(verificar)

console.log("Exercicio 2")
console.log("-----------------------------------")

function juros(preco, formaPagamento) {
    if (formaPagamento == "1") {
        return "total: " + (preco - (preco * 0.1));
    } else if(formaPagamento == "2") {
        return "total: " + (preco - (preco * 0.2));
    } else if(formaPagamento == "3") {
        return preco
    } else {
        return "total: " + (preco + (preco * 0.1));
    }
}

let total = juros(50, 1)
console.log(total)
total = juros(50, 2)
console.log(total)
total = juros(50, 3)
console.log(total)
total = juros(50, 4)
console.log(total)

