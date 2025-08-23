import { homeElements } from '../elements/homeElements'

class HomePage {
    preencherPlaca(placa) {
        cy.wait(1000);
        cy.get(homeElements.inputBusca).type(placa);
    }

    preencherModelo(modelo) {
        cy.wait(1000);
        cy.get(homeElements.inputBusca).type(modelo);
    }

    resultadoBusca(veiculo) {
        cy.get(homeElements.primeiroResultado).should("contain.text", veiculo);
    }

    contarVeiculosAlugados() {
        return cy.get(homeElements.statusAlugado).its("length")
    }

    contarVeiculosGrid() {
        return cy.get(homeElements.vehicleCards).its("length")
    }

    obterValorDashboardTotalVeiculos() {
        return cy.get(homeElements.cardTotalVeiculos).invoke("text").then(text => parseInt(text.trim()))
    }

    obterValorDashboardVeiculosAlugados() {
        return cy.get(homeElements.cardVeiculosAlugados).invoke("text").then(text => parseInt(text.trim()))
    }

    validarQtdVeiculosAlugados() {
        cy.wait(500); //melhorar para um intercept
        this.contarVeiculosAlugados().then(qtdGrid => {
        this.obterValorDashboardVeiculosAlugados().then(qtdDashboard => {
            expect(qtdGrid).to.eq(qtdDashboard)
        })
        })
    }

    validarQtdTotalVeiculos() {
        cy.wait(500); //melhorar para um intercept
        this.contarVeiculosGrid().then(qtdGrid => {
        this.obterValorDashboardTotalVeiculos().then(qtdDashboard => {
            expect(qtdGrid).to.eq(qtdDashboard)
        })
        })
    }

    validarVeiculosNaoDisponiveisNaoPodemSerAlugados() {
        cy.get(homeElements.vehicleCards).each(($card) => {
        const status = $card.find("span").text()
        const botao = $card.find("button:contains('Alugar')")

        if (status !== "Disponível") {
            expect(botao).to.have.attr("disabled")
        }
        })
    }
}

export default new HomePage()