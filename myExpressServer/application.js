import Express from 'express';
import cors from 'cors';

export default () => {
  const app = new Express();
  app.use(cors());
  app.use(Express.static('public/dist'));

  app.get('/', (req, res) => {

  });

  return app;
};
