const { Router } = require('express');
const uploader = require('../src/js/pinataTool.js');
const QRCode = require('qrcode');
const path = require('path');

const router = new Router();

router.get('/', async function (req, res) {
  if (!req.query) return res.sendStatus(400);
  console.log(req.params);
  console.log(req.query);
  const address = req.query.address;
  await QRCode.toFile(
    'qrcode.png',
    address,
    {
      color: {
        dark: '#170034',
        light: '#e238a5',
      },
      width: 256,
    },
    function (err) {
      if (err) throw err;
      console.log('done');
    },
  );
  const filename = 'qrcode ' + address.slice(0, 5);
  const uploaded = await uploader.uploadFile(filename, 'qrcode.png');
  console.log('Upload result:', uploaded);
  res.send(uploaded);
});

module.exports = router;
