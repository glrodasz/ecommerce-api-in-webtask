import { insertOne, getAll } from '../../lib/mongo';

class ProductsService {
  constructor() {
    this.collection = 'products';
  }

  getAll(cb) {
    getAll(this.collection, result => {
      cb({ message: 'The products has been succesfully listed.', products: result });
    });
  }

  insertOne(product, cb) {
    insertOne(this.collection, product, result => {
      cb({ message: 'The product has been succesfully created.', insertedId: result });
    });
  }
}

export default ProductsService;
