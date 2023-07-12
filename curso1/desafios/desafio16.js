// let arr = gets().split(', ')

const list = {
    Reflorestamento: 'feito',
    EsgotoTratado: 'feito',
    EmissaoDeCarbono: 'feito',
    EnergiaSustentavel: 'feito',
}

const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);

//TODO: Print no console "Multa", "Avaliação de progresso" ou "Não multar" dependendo do valor 
//de cada uma das chaves a serem verificadas da lista arr

for(let i of list) {
  if(i === 'Feito') {
    console.log("Não multar")
  }
}