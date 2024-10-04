const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello world!');
});

app.get('/api/test', (req, res) => {
  res.send({ message: 'Endpoint de teste'});
});

app.get('/api/test-2', (req, res) => {
  res.send({ message: 'Endpoint de teste 2334'});
});

app.get('/api/test-3', (req, res) => {
  res.send({ message: 'Endpoint de teste 2335'});
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});

module.exports = app;