Feature: Alugar

    Background:
        Given que o usuário esteja logado com credenciais válidas
        When selecionar o primeiro veículo disponível na listagem

    Scenario Outline: Alugar veículo com sucesso
        And confirmar o aluguel
        And escolher o método de pagamento "<metodo>"
        And confirmar o pagamento
        Then o sistema deve registrar o aluguel com sucesso

        Examples:
        | metodo  |
        | Cartão  |
        | Pix     |

    #MELHORAR
    Scenario: Alugar veículo com cupom válido
        And confirmar o aluguel
        And aplicar o cupom "DESCONTO50"
        Then o valor total deve ser reduzido em R$ 50,00

    Scenario: Alugar veículo com cupom inválido
        And confirmar o aluguel
        And aplicar o cupom "INVALIDO123"
        Then deve visualizar a mensagem de erro de cupom inválido "Cupom inválido"

    Scenario: Validar cálculo do valor ao aumentar quantidade de dias
        When alterar a quantidade de dias para um valor aleatório entre 2 e 7
        Then o valor total deve ser igual à diária multiplicada pela quantidade de dias

    Scenario: Validar se informações do resumo permanecem corretas até o pagamento
        When alterar a quantidade de dias para um valor aleatório entre 2 e 7
        And capturar o resumo do primeiro modal
        And confirmar o aluguel
        Then as informações devem estar corretas no resumo do segundo modal