//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('todos').findOneAndUpdate({
  //   _id: new ObjectID('5a7bb854c1b2cc20b0e0bbc7')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //       returnOriginal: false
  // });
  db.collection('users').findOneAndUpdate({
    email: 'gustavo.tolone@gmail.com'
  }, {
    $inc: {
      age: 1
    }
    }, {
      returnOriginal: false
    }).then((res) => {
      console.log(res);
    });

  //db.close();
});
