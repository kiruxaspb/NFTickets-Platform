const path = require('path');
const express = require('express');

const app = express();

// app.use(express.static(path.join(__dirname, 'src')));
// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/src/index.html`);
// });

// app.use(express.static(path.join(__dirname, './client/build')));
// app.get('*', (req, res) => {
//   res.sendFile('index.html', { root: path.join(__dirname, './client/build') });
// });

app.use('/api', require('./routes/route'));

// The response of the token uploader module

app.listen(5000, () => {
  console.log('Application listening on port 5000!');
  console.log('Link: http://localhost:5000/');
});
