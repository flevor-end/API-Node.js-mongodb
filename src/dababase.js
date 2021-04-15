const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost/flutter-node-masdamas', {
        useNewUrlParser: true
    });
    console.log('Database: Connected');
};

module.exports = { connect };