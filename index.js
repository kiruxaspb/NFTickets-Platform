const path = require('path');
const express = require('express');
const uploader = require('./src/js/pinataTool.js');
const app = express();
const QRCode = require('qrcode');

app.use(express.static(path.join(__dirname, 'src')))
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

// The response of the token uploader module
app.get('/api', async function (req, res) {
  if (!req.query) return res.sendStatus(400)
  console.log(req.query);
  const address = req.query.address;
  await QRCode.toFile('qrcode.png', address, {
    color: {
      dark: '#170034',
      light: '#e238a5'
    },
    width: 256
  }, function (err) {
    if (err)
      throw err;
    console.log('done');
  })
  const filename = 'qrcode ' + address.slice(0, 5);
  const uploaded = await uploader.uploadFile(filename, 'qrcode.png');
  console.log("Upload result:", uploaded);
  res.send(uploaded);
})

app.listen(3000, () => {
  console.log('Application listening on port 3000!');
  console.log('Link: http://localhost:3000/')
});