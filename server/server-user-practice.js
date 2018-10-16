const mongoose = require('mongoose');

mongoose.Promse = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

const newUser = new User({
    email: '    burt@burty.com   '
});

// const newUser = new User({email: '      '});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, null, 2));
}, (err) => {
    console.log('Unable to save user.  ', err);
});