Feature: Alugar

    Background:
        Given que o usuário esteja logado como "admin@teste.com" com senha "123456"

    Scenario: Alugar veículo com sucesso
        When selecionar o primeiro veículo disponível na listagem
        And confirmar o aluguel
        And escolher o método de pagamento "<metodo>"
        And confirmar o pagamento
        Then o sistema deve registrar o aluguel com sucesso

        Examples:
        | metodo  |
        | Cartão  |
        | Pix     |