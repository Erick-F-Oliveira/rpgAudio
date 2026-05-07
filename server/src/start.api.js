import express from "express";
import * as dotenv from "dotenv";
import Router from "../Router.js";
import logger from "./utils/logger.js";
import cors from "cors";
import passport from "passport";
import passportConfig from "./config/passport.js";
import session from "express-session";
dotenv.config();
const secretSession = process.env.SECRET_SESSION;
const PORT = process.env.PORT;

const startApi = async () => {
  const app = express();
  app.use(express.json());
  // Configuração do CORS com credenciais precisam de um endereço específico. No "*"
  // não funciona.
  app.use(
    cors({
      origin: "http://localhost:5173", // A URL do seu front-end, essa é a padrão do Vite
      credentials: true,
    }),
  );

  // Configuração da sessão
  app.use(
    session({
      secret: secretSession, // string aleatória
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  passportConfig();

  // Usa as rotas a partir do caminho "/api"
  app.use("/api", Router);

  app.listen(PORT, () => {
    logger.success("🔀 Rotas registradas. ✔");
    logger.success(`💻 Servidor rodando na porta ${PORT}. ✔`);
  });

  return app;
};

export default startApi;
