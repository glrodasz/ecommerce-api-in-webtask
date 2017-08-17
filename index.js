import express from 'express'
import Webtask from 'webtask-tools'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/products', function(req, res) {
  const productList = [
    {
      id: 1,
      title: "Neil deGrasse Tyson's Newest STEM campaign",
      image:
        'https://d2v48i7nl75u94.cloudfront.net/uploads/f1dc399219683de51f22d9dfa7e11801.jpg',
      quantity: 1,
      price: 50000
    },
    {
      id: 2,
      title: "Neil deGrasse Tyson's Oldest STEM campaign",
      image:
        'https://d2v48i7nl75u94.cloudfront.net/uploads/f1dc399219683de51f22d9dfa7e11801.jpg',
      quantity: 2,
      price: 100000
    }
  ];

  res.json({ productList });
});

module.exports = Webtask.fromExpress(app);
