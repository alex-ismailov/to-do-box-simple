import app from '../application.js';

const port = 8090;
app().listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server has been started, at ${new Date()}`);
});
