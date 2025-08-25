# 🚗 Projeto de Automação de Testes - Fleet Manager

Este projeto tem como objetivo automatizar os testes end-to-end da aplicação Fleet Manager (https://qe-test.recrutamento.avantsoft.com.br
), uma plataforma fictícia que simula uma empresa de aluguel de veículos. A automação cobre cenários reais de login, aluguel, busca e validação da home.

## 🧪 Tecnologias Utilizadas

- Cypress
 para automação de testes;

- Cucumber (BDD)
 para escrita dos cenários em linguagem natural (Gherkin);

- Page Object Model (POM) para organização do código;

- Mochawesome
 para relatórios customizados;

- GitHub Actions
 para pipeline de CI/CD.

--- 

## ⚙️ Pré-requisitos

Antes de iniciar, você precisará ter instalado:

- Node.js (>= 16.x)

- npm ou yarn

- Git

---

## 🚀 Como rodar o projeto localmente

1. Clonar o repositório
```bash
git clone https://github.com/Rafa-eloi/automation-fleet-manager.git
cd automation-fleet-manager
```

2. Instalar dependências
```bash
npm install
```

3. Configurar variáveis de ambiente
Crie o arquivo cypress.env.json na raiz do projeto com as credenciais:
```json
{
  "validUser": {
    "email": "admin@teste.com",
    "password": "123456"
  },
  "invalidUser": {
    "email": "admin@teste.com",
    "password": "senhaErrada"
  }
}
```
---

## 🧪 Executando os testes

Rodar em modo interativo
```bash
npx cypress open
```

Rodar em modo headless (geração de relatório)
```bash
npx cypress run
```

---

## 📊 Relatórios com Mochawesome

- Após a execução dos testes, um relatório HTML será gerado automaticamente no caminho.
```bash
cypress/reports/index.html
```

---

## ⚡ CI/CD - GitHub Actions
O projeto já conta com um workflow configurado em .github/workflows/ci.yml.
Ele executa os testes de forma automática em pull requests, push na main

---

## ✅ Funcionalidades testadas

🔐 Login
- Login válido;
- Login inválido;
- Campos obrigatórios;
- Logout.

🏠 Home
- Validação do total de veículos no grid vs dashboard;
- Validação de veículos alugados vs dashboard;
- Validação do botão "Alugar" desabilitado para veículos indisponíveis.

🔎 Busca
- Pesquisa por veículo existente modelo;
- Pesquisa por veículo existente placa;
- Pesquisa por veículo inexistente (grid vazio).

🚘 Aluguel
- Fluxo completo de aluguel de veículo com pagamento via pix e via cartão;
- Aplicação de cupom de desconto válido e inválido;
- Validação dinâmica do valor conforme quantidade de dias (2 a 7 dias);
- Validação do resumo da compra entre primeiro e segundo modal.

---

## 📌 Boas práticas aplicadas

- Padrão Page Object Model (POM) para maior organização;
- Separação de elementos e métodos (ex: aluguelElements.js e aluguelPage.js);
- Dados de usuários externos (cypress.env.json);
- Reports visuais com Mochawesome;
- Pipeline CI/CD automatizado no GitHub Actions.

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE
 para mais informações.