# Aplicação de Gerenciamento de Viagens - MVC 

Este projeto é uma aplicação web simples desenvolvida apenas com **JavaScript** utilizando o padrão arquitetural **MVC (Model-View-Controller)**.
A aplicação interage com a API pública da [MockAPI](https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/alimentos), permitindo **listar, adicionar e remover viagens**.

## 🌐 Acesse o Site

Para visualizar o projeto em funcionamento, clique no botão abaixo:

[![Visite o Site](https://img.shields.io/badge/Visite_o_Site-Click_aqui-blue)](https://sirvalfilho.github.io/mvc-app-viagens/)


## 📌 Funcionalidades

- ✅ Listagem de todas as viagens da API
- ➕ Adição de uma nova viagem via formulário
- ❌ Remoção de uma viagem por ID
- 📆 Validação de formulário (campos obrigatórios e valor numérico)

---
## 🛠 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML5** – Estrutura do layout da aplicação.
- **CSS3 / Bootstrap 5** – Estilização da interface com responsividade e componentes visuais.
- **JavaScript (Vanilla JS)** – Lógica da aplicação, manipulação do DOM e consumo da API.
- **MockAPI** – Serviço para simular uma API REST com persistência de dados.
> ⚠️ **Atenção:** Ao enviar um novo objeto para a API, ela pode criar dois registros. Isso é um comportamento observado com esse endpoint específico da MockAPI. Portanto, ao adicionar uma nova viagem, pode ser que apareçam duas entradas na tabela.
> 
- 🔗 Endpoint da API: [`https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/alimentos`](https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/alimentos)

---

## 📁 Estrutura do Projeto
```bash
📦 projeto-viagens-mvc
├── 📁 js                        # Organiza todos os arquivos JavaScript
│   │
│   └── 📁 controller
│   │     └── Controller.js       # Lógica de controle: conecta a View ao Model
│   │
│   └── 📁 model
│   │     └── Trip.js             # Modelo de dados da viagem
│   │
│   └── 📁 view
│         └── TripView.js         # Manipulação do DOM e exibição dos dados
│
├── 📁 public
│     └── 📄 earth.png            # Logo da aplicação
│
├──  📁 styles
│     └── 📄 style.css            # Estilos personalizados da aplicação
│
└──  📄 index.html                # Página principal da aplicação
```
---
# 🚀Clone o Projeto

### Clone o repositório para o seu computador

```bash
git clone https://github.com/SirvalFilho/mvc-app-viagens.git
```
### Acesse o diretório do projeto
```bash
cd mvc-app-viagens
```
### (Opcional) Abra no VS Code
```bash
code .
```


