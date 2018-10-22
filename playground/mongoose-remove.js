const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove('5bcdff85b85ea44bf7ef855c').then((todo) => {
//     console.log(todo);
// });

// Todo.findOneAndRemove({_id: '5bcdff85b85ea44bf7ef855c'}).then((todo) => {

// });

