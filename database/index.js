const mongoose = require('mongoose');

const url = 'mongodb://localhost/todosdb';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

module.exports = db;
