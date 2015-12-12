// models/users.js

var mongoose = require('mongoose');
var Habits = require('./habit');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var UsersSchema = new Schema({
    email: String,
    tags: [String],
    yepd: [{
        timestamp: String, habit: {type: ObjectId, ref: Habits}
    }],
    noped: [{
        timestamp: String, habit: {type: ObjectId, ref: Habits}
    }]
}, {timestamps: true});


module.exports = mongoose.model('Users', UsersSchema);
