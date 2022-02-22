import express from 'express';

const port = process.env.PORT || 8080;
const app = express();

app.get('/', (_req, res) => {
  res.send('hello, world!');
});

app.listen(port, () => {
  console.log(`server started at port: ${port}.`);
});

export default app;
