// models/users.js

var mongoose     = require('mongoose');
var timestamps   = require('mongoose-timestamp');
var Schema       = mongoose.Schema;

var UsersSchema   = new Schema({
    name: String
});

UsersSchema.plugin(timestamps);

module.exports = mongoose.model('Users', UsersSchema);
