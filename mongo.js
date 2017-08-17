import { MongoClient } from 'mongodb';
import config from './config.js';

const URL = `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`;

console.log(URL);

export const connectDb = (cb) => {
  MongoClient.connect(URL, (err, db) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to MongoDB.')
      cb(db);
    }
  });
}

export const insertProducts = (product, cb) => {
  connectDb(db => {
    const collection = db.collection('products');

    collection.insert(product, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        cb(result.insertedIds[0]);
        db.close();
      }
    });
  })
}
