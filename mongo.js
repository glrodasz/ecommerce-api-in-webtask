import { MongoClient } from 'mongodb';

export const connectDb = (url, cb) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log(err);
    } else {
      console.log('connected to MONGO!')
      cb(db);
    }
  });
}

export const insertProducts = (url, product, cb) => {
  connectDb(url, db => {
    const collection = db.collection('products');

    collection.insert(product, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        cb(result);
        db.close();
      }
    });
  })
}
