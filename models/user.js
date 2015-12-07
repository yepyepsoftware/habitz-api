// models/users.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UsersSchema = new Schema({
    name: String
}, {timestamps: true});


module.exports = mongoose.model('Users', UsersSchema);
