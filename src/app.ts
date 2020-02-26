import express from 'express';
import cors from 'cors';
import BancoDeDados from './banco_de_dados';

class App {

  private app: express.Application;

  constructor() {
    this.app = express();
  }

  public iniciar(): void {
    this.adicionaMiddlewares();
    this.configuraBancoDeDados();
    this.adicionaRotas();
    this.app.listen(3000);
  }

  private adicionaMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private configuraBancoDeDados(): void {
    BancoDeDados.conectar();
  }

  private adicionaRotas(): void {

  }
}

export default new App();