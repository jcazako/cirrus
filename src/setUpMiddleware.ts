//import express, { Router } from 'express';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

function setUpMiddleWare(app: express.Application) {
  /*set up bodyparser*/

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  app.use(morgan('combined'));
  app.use(helmet());

  app.use(cookieParser());
}

export default setUpMiddleWare;
