const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest',{uesMongoClient: true })

mongoose.Promise = global.Promise;


module.exports = mongoose;