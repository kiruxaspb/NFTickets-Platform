const express = require('express');

const app = express();

app.use('/api', require('./routes/route'));

// The response of the token uploader module

app.listen(5000, () => {
  console.log('Application listening on port 5000!');
  console.log('Link: http://localhost:5000/');
});
