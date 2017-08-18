import { MongoClient } from 'mongodb';
import config from '../../config.js';

const URL = `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`;

export const connect = (cb) => {
  MongoClient.connect(URL, (err, db) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to MongoDB.')
      cb(db);
    }
  });
}

export const getAll = (collection, cb) => {
  connect(db => {
    db.collection(collection).find().toArray((err, result) => {
      if (err) {
        console.log(err);
      } else {
        cb(result);
        db.close();
      }
    });
  })
}

export const insertOne = (collection, doc, cb) => {
  connect(db => {
    db.collection(collection).insertOne(doc, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        cb(result.insertedId);
        db.close();
      }
    });
  })
}
