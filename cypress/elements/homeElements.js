export const homeElements = {
    inputBusca: '.relative > .flex',
    primeiroResultado: ':nth-child(1) > .flex-col',

     // Dashboard
    cardTotalVeiculos: ".dashboard-card:contains('Total de Veículos') .text-3xl",
    cardVeiculosAlugados: ".dashboard-card:contains('Veículos Alugados') .text-3xl",

    // Grid de veículos
    vehicleCards: ".vehicle-card",
    statusAlugado: ".vehicle-card span:contains('Alugado')",
    statusDisponivel: ".vehicle-card span:contains('Disponível')",
    statusNaoDisponivel: ".vehicle-card span:not(:contains('Disponível'))",
    btnAlugar: ".vehicle-card button:contains('Alugar')"
}

