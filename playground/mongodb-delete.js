//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

  //deleteMany
  // db.collection('todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('todos').deleteOne({text: 'Eat lunch'}).then((resutl) => {
  //   console.log(resutl);
  // })
  //findOneAndDelete
    db.collection('todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
      console.log(result);
    })
  //db.close();
});
