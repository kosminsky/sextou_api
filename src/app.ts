import express from 'express';
import cors from 'cors';

class App {

  private app: express.Application;

  constructor() {
    this.app = express();
  }

  public iniciar(): void {
    this.addMiddlewares();
    this.configDataBase();
    this.addRoutes();
    this.app.listen(3000);
  }

  private addMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private configDataBase(): void {

  }

  private addRoutes(): void {

  }
}

export default new App();