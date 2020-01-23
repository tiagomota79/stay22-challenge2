const express = require('express');
const app = express();

app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.send('index');
});

app.listen(3000, () => {
  console.log('App listenint to port 3000');
});
