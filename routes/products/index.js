import ProductsService from '../../services/products';

const productsService = new ProductsService();

const products = app => {
  app.get('/products', (req, res) => {
    productsService.getAll(message => {
      res.json(message);
    });
  });

  app.post('/products', function(req, res) {
    const { product } = req.body;

    productsService.insertOne(product, message => {
      res.json(message);
    })
  });
}

export default products;
