function Calcularimc(peso, altura) {
    total = peso / (altura * altura)
    console.log(total)
    return;
}

function main () {
    const imc = Calcularimc(65, 1.70)
    if(imc > 25) {
        console.log("acima do peso")
    } else if (imc >= 18.5 && imc <= 25) {
        console.log("peso ideal")
    } else {
        console.log("abaixo do peso")
    }
}
main()
