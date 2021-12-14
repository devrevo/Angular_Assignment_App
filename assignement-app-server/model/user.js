let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = Schema({
    username: String,
    password: String,
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('user', userSchema);
