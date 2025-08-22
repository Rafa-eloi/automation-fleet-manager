Feature: Busca

    Background:
        Given que o usuário esteja logado como "admin@teste.com" com senha "123456"

    Scenario: Busca por placa
        When informar a placa "CARO001"
        Then deve visualizar apenas o veículo "Mercedes Classe C"

    Scenario: Busca por modelo
        When informar o modelo "Honda Civic"
        Then deve visualizar apenas o veículo "Honda Civic"

