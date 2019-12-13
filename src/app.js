import express from 'express';
import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config();

import './database/connection';


import home from './routes/home';
import usuario from './routes/usuario';
import token from './routes/token';
import aluno from './routes/aluno';
import foto from './routes/foto';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/usuarios', usuario);
    this.app.use('/tokens', token);
    this.app.use('/alunos', aluno);
    this.app.use('/fotos', foto);
  }
}

export default new App().app;
