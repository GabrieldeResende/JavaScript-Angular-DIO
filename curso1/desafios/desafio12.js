const num = [5,3,4,1,10,8]

let maiorPar = 0
let menorImpar = 0

for(let n of num) {
    // console.log(n);
    if(n % 2 === 0) {
        if(n > maiorPar) {
            maiorPar = n
        }
    }
    if(n % 2 === 1) {
        console.log(n);
        if(n > menorImpar) {
            menorImpar = n
        }
    }
}
console.log(maiorPar, menorImpar);