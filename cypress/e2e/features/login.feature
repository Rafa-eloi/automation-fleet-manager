Feature: Login

    Scenario: Login com sucesso
        Given que o usuário esteja logado como "admin@teste.com" com senha "123456"

    Scenario: Login inválido
        Given que o usuário esteja na tela de login
        When informar o email "admin@teste.com" e a senha "senhaErrada"
        Then deve visualizar a mensagem de erro "Credenciais inválidas"

    Scenario: Logout com sucesso
        Given que o usuário esteja logado como "admin@teste.com" com senha "123456"
        When clicar no botão de sair
        Then deve ir para a tela de login

