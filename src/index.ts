import Application from './app';
import { v4 as uuidv4 } from 'uuid';
import Env from '@jcazako/env';

const envSession: Env = new Env();

const port = process.env.DEFAULT_PORT || 3000;

const server = new Application({
  id: uuidv4(),
  port: Number(port),
  env: envSession.env
});

server.start();
