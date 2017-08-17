import express from 'express'
import Webtask from 'webtask-tools'
import bodyParser from 'body-parser'
import { insertProducts } from './mongo';

// Init Express app
const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
app.post('/products', function(req, res) {
  const { product } = req.body;
  insertProducts(product, result => {
    res.json({ message: 'The product has been succesfully created.', insertedId: result });
  })
});

module.exports = Webtask.fromExpress(app);
