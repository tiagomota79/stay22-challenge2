const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/', (req, res) => {
  res.sendFile('/public/index.html', { root: __dirname });
  // res.json(data);
});

app.get('/data', (req, res) => {
  res.json(data);
});

app.use('/', express.static('public'));

app.listen(3000, () => {
  console.log('App listening to port 3000');
});
