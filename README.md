# Teste Técnico - Front End

## Autor
Alexandre Foschiera Bisognin

## Descrição
Este projeto é um teste técnico para a vaga de Front End. O objetivo é demonstrar habilidades em Vue.js, desenvolvendo uma aplicação de gerenciamento de tarefas.

**Link para o projeto em produção:** [Teste Front Effecti](https://teste-effecti.alexandrefb.com/)


## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- Vue 2
- Vuex

## Como executar o projeto localmente
Utilzando o node a partir da versão 20:
1. Clone o repositório:
  ```bash
  https://github.com/alexandre-fb/teste-front-effecti.git
  ```

2. No terminal rode npm install
```bash
npm install
  ```

3. No terminal rode npm run serve
```bash
npm run serve
  ```

4. No terminal será gerado o link para acessar localmente o projeto.

## Funcionalidades
- [x] **Adição de tarefa**
- [x] **Adição de 150 tarefas de teste**
- [x] **Edição de tarefa**
- [x] **Exclusão de tarefa**
- [x] **Busca por nome ou descrição**
- [x] **Filtro por status**
- [x] **Ordenação por prioridade**
- [x] **Persistência de dados no Local Storage**
- [x] **Scroll infinito com lógica de paginação**
- [x] **Gerenciamento de estados globais com Vuex**
- [x] **Interface responsiva**

## Processo de Desenvolvimento

### Estrutura Inicial
Como o teste não contava com um layout definido, criei um breve rascunho da estrutura para me guiar:

- Estrutura do App
![Estrutura do App](/public/images/readme/app_structure.jpeg)

- Estrutura da main
![Estrutura da Main](/public/images/readme/main_structure.jpeg)

- Após essa estruturação incial, iniciei o projeto utilizando o Vue CLI para ganhar tempo e configura com facilidade o Vue na versão 2. 

- Em seguida preparei toda a lógica de gerenciamento dos estados globais para as principais funcionalidades no Vuex

- Com a lógica funcionando parti para a estilização dos componentes e demais ajustes.

## Conclusão

Gostei muito de ter participado deste projeto. Foi uma boa oportunidade para demonstrar minhas habilidades com Vue.js e Vuex. Apesar de o Vue.js já ter a versão 3, a versão 2 continua sendo muito boa de usar.

Devido ao tempo limitado disponível para a realização deste teste, não consegui implementar o Virtual Scroll, pois precisaria estudar um pouco mais sobre o assunto. Em um projeto real, provavelmente utilizaria uma biblioteca específica para ganhar tempo. No entanto, optei por adicionar o scroll infinito com uma lógica de paginação, pois já estou mais familiarizado e consegui implementar de forma rápida, melhorando a performance da aplicação.

Agradeço pela oportunidade de realizar este teste e estou à disposição para discutir qualquer aspecto do projeto ou responder a quaisquer perguntas.

Muito obrigado!