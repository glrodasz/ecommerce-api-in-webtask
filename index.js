import express from 'express'
import Webtask from 'webtask-tools'
import bodyParser from 'body-parser'
import { insertProducts } from './mongo';

const url = '';

const app = express()
app.use(bodyParser.json())

app.post('/products', function(req, res) {
  const { product } = req.body;
  insertProducts(url, product, result => {
    res.json({ status: 201, message: 'OK!', mongoResult: result });
  })
});

module.exports = Webtask.fromExpress(app);
