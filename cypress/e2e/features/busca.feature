Feature: Busca

    Background:
        Given que o usuário esteja logado com credenciais válidas

    Scenario: Busca por placa
        When informar a placa "CARO001"
        Then deve visualizar apenas o veículo "Mercedes Classe C"

    Scenario: Busca por modelo
        When informar o modelo "Honda Civic"
        Then deve visualizar apenas o veículo "Honda Civic"

    Scenario: Buscar veículo inexistente
        When pesquisar pelo veículo "Inexistente123"
        Then o grid de veículos deve estar vazio
