import express from 'express';
import Router from 'express-promise-router';

import setupRoutes from './route';
import setUpMiddleWare from './setUpMiddleware';

const SIGNALS = ['SIGTERM', 'SIGINT'];

class Application {
  id: string;
  host: string;
  port: number;
  env: string;
  server: any;

  constructor(parameters: {
    id: string;
    port: number;
    env: string;
    host?: string;
  }) {
    this.id = parameters.id;
    this.port = parameters.port;
    this.env = parameters.env;
    this.host = parameters.host || 'localhost';
  }

  async stop(signal: string) {
    if (!this.server) {
      console.info('App is not start');
      return;
    }
    console.log(signal);
    this.server.close(() => {
      console.log('Closing server');
      process.exit(0);
    });
  }

  async restart() {
    console.log('RESTART');
  }

  async start() {
    const app = express();
    await setUpMiddleWare(app);

    const router = Router();
    await setupRoutes(router);

    this.server = app.listen(this.port, () => {
      console.log(`starting server in ${this.env} at http://${this.host}:${this.port}`);
    });

    SIGNALS.forEach((signal) => {
      process.on(signal, () => this.stop(signal));
    });

    process.on('unhandledRejection', (err: Error) => console.log(err));
  }
}

export default Application;
