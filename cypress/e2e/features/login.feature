Feature: Login

    Scenario: Login com sucesso
        Given que o usuário esteja logado com credenciais válidas

    Scenario: Login inválido
        Given que o usuário esteja na tela de login
        When informar credenciais inválidas
        Then deve visualizar a mensagem de erro "Credenciais inválidas"
    
    Scenario: Login com campo email vazio
        Given que o usuário esteja na tela de login
        When clicar no botão de login sem preencher email e senha
        Then deve aparecer uma mensagem "Preencha este campo."

    Scenario: Logout com sucesso
        Given que o usuário esteja logado com credenciais válidas
        When clicar no botão de sair
        Then deve ir para a tela de login
