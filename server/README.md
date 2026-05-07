## Escolhas tecnicas
Aqui eu fiz algumas escolhas para o projeto, e caso você não saiba exatamente o que cada coisa faz , segue uma pequena descrição 

**Chalk**<br>
Estiliza e adiciona cores às mensagens no terminal, facilitando logs e depuração.<br> 
<small>Acho que as letrinhas coloridinhas ficam bem legais</small>

**Cors**<br> 
(Cross-Origin Resource Sharing) Permite a comunicação entre frontend e backend, previnindo erros de origens diferentes.<br>
<small>Quando tudo esta rodando no mesmo locol ta ok, mas em produção, com client e server rodando em hambientes diferentes, o cors é essencial</small>

**Dotenv**<br> 
Carrega variáveis de ambiente a partir de um arquivo .env para manter dados sensíveis seguros.

express — Framework web rápido e minimalista para Node.js, usado para construir a API e gerenciar rotas.

express-session — Gerencia sessões de usuário no Express, armazenando dados entre requisições.

joi — Biblioteca de validação de dados que permite definir esquemas e validar entradas de forma robusta.

jsonwebtoken — Implementa JSON Web Tokens para autenticação stateless e troca segura de informações.

mongoose — ODM (Object Data Modeling) para MongoDB, que simplifica a modelagem de dados e interações com o banco.

passport — Middleware de autenticação flexível e modular para Node.js, que suporta diversas estratégias.

passport-discord — Estratégia do Passport para autenticação via OAuth2 da API do Discord.