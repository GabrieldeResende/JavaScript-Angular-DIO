const salarioBruto = 2000
const beneficio = 250

if(salarioBruto <= 1100) {
    aliquota = 0.05
} else if(salarioBruto > 1100 && salarioBruto <= 2500) {
    aliquota = 0.1
} else {
    aliquota = 0.15
}

let salario = (salarioBruto - aliquota) + beneficio

console.log(salario);