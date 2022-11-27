import cors from 'cors';
import express, { Application } from 'express';
import Routes from './routes';

class App {
  private routes: Routes;
  private app: Application;

  constructor() {
    this.app = express();
    this.routes = new Routes();

    this.setMiddlewares();
    this.setRoutes();
  }

  private setMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setRoutes(): void {
    this.app.use('/api/v1/usuario', this.routes.usuario);
    this.app.use('/api/v1/unidade', this.routes.unidade);
    this.app.use('/api/v1/ambiente', this.routes.ambiente);
    this.app.use('/api/v1/empresa', this.routes.empresa);
    this.app.use('/api/v1/criterio', this.routes.criterio);
  }

  public initialize(port: string): void {
    this.app.listen(port, () => console.log(`server is running on port ${port}`)) ;
  }
}

export default App;