import Express from 'express';
import cors from 'cors';
import path from 'path';

export default () => {
  const app = new Express();
  app.use(cors());
  app.use(Express.static(path.join(path.resolve(), 'myExpressServer/public/dist')));

  return app;
};
