# Backend de Automação de Scraping do Reddit

Este é o backend de um projeto de automação de web scraping que coleta os posts mais quentes do subreddit r/brdev no Reddit e os armazena em um banco de dados. O backend foi construído utilizando as seguintes tecnologias: Node.js, Express, Cors, Sequelize e SQLite.

## Rotas

### Adicionar um Post

- Rota: `POST /posts/add`
- Descrição: Esta rota permite adicionar um novo post coletado pelo web scraping ao banco de dados.
- Parâmetros:
  - `autor`: O autor do post.
  - `titulo`: O título do post.
  - `quantidade_comentarios`: A quantidade de comentários no post.
  - `link_publicacao`: O link para a publicação no Reddit.
  - `conteudo`: O conteúdo do post.
- Resposta:
  - Status 200: O post foi adicionado com sucesso.
  - Status 400: Erro interno do servidor.
  - Status 401: O post já existe no banco de dados.

### Buscar Posts

- Rota: `GET /posts/findAll`
- Descrição: Esta rota permite buscar todos os posts armazenados no banco de dados.
- Resposta:
  - Status 200: Retorna a lista de posts em ordem decrescente por ID.
  - Status 400: Erro interno do servidor.

## Instalação e Uso

Certifique-se de ter o Node.js instalado no seu sistema. Em seguida, siga estas etapas para configurar o ambiente:

1. Clone o repositório:

        git clone https://github.com/LucasAmaralDev/backend-automacao-scraping-reddit.git
        cd backend-automacao-scraping-reddit

2. Instale as dependências:

        npm install

3. Inicie o servidor:

        npm start


O servidor estará em execução em http://localhost:8080.

## Banco de Dados

Este backend utiliza um banco de dados SQLite para armazenar os posts coletados. O modelo de dados pode ser encontrado no arquivo `models/Posts.js`.

## Contribuição

Se desejar contribuir para este projeto, siga estas etapas:

1. Fork o repositório.
2. Crie uma branch para a sua contribuição: `git checkout -b minha-contribuicao`
3. Faça as alterações e commit: `git commit -m 'Adicionei recurso X'`
4. Faça o push para a sua branch: `git push origin minha-contribuicao`
5. Crie um Pull Request.

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

## Contato

Se você tiver alguma dúvida ou precisar de suporte, entre em contato com [lucashsamaral@gmail.com](mailto:lucashsamaral@gmail.com).

