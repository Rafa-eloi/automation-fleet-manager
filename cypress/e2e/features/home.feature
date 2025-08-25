Feature: Home

    Background:
        Given que o usuário esteja logado com credenciais válidas

    Scenario: Validar quantidade de veículos alugados
        When contar quantos veículos estão alugados na listagem
        Then o valor deve ser igual ao número mostrado no dashboard

    Scenario: Validar quantidade total de veículos
        When contar quantos veículos existem na grid
        Then o valor deve ser igual ao total de veículos no dashboard

    Scenario: Validar se veículos não disponíveis não podem ser alugados
        Then todos os veículos com status diferente de "Disponível" devem estar com o botão de alugar desabilitado
