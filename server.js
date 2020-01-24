const express = require('express');
const app = express();
const data = require('./data.json');

app.use('/', express.static('public'));

// app.get('/', (req, res) => {
//   res.send('index.html');
// });

app.listen(3000, () => {
  console.log('App listening to port 3000');
});
