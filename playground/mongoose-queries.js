const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

const {User} = require('./../server/models/User');

// var id = '5a7bb82ec1b2cc20b0e0bbc0111';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => {
//   console.log(e);
// });

var id = '5a7a578b262d24f409e04901';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
   console.log('User by ID', user);
}).catch((e) => {
  console.log(e);
});
