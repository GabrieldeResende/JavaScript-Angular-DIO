let plastico = 4
let diasNecessarios = 0;

//TODO: Print no console a quantidade de dias que levará para que o plástico chegue
//a 1kg ou menos

while(true) {
    plastico /= 2
    total = plastico
    plastico = total
    diasNecessarios += 1

    if(plastico < 1) {
        console.log(`Serão necessários ${diasNecessarios} dias`);
        break
    }
}


