import express from 'express'
import Webtask from 'webtask-tools'
import bodyParser from 'body-parser'
import products from './routes/products';

const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
products(app);

module.exports = Webtask.fromExpress(app);
