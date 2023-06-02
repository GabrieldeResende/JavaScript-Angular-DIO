const nomeRestaurante = gets();
const tempoEstimadoEntrega = parseInt(gets());

console.log(gets())

function gets(nomeRestaurante, tempoEstimadoEntrega) {
    nomeRestaurante = "Giraffas"
    tempoEstimadoEntrega = 35
    return `O restaurante ${nomeRestaurante} entrega em ${tempoEstimadoEntrega} minutos.`
}