const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://george:canserbero123@cluster0.toijdup.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));