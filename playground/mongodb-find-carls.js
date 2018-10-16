const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db('TodoApp');

    db.collection('Users').find({
        name: "Carl"
    }).toArray().then((docs) => {
        console.log('Carls: ');
        console.log(JSON.stringify(docs, null, 2));
    }, (err) => {
        console.log('Unable to connect to Todos, ', err);
    });

    db.collection('Users').find({
        name: "Carl"
    }).count().then((count) => {
        console.log(`Number of Carls: ${count}`);
    }, (err) => {
        console.log('Unable to connect to Todos', err);
    });
});