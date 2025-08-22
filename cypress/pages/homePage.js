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

}

export default new HomePage()