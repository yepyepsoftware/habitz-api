// models/users.js

var mongoose = require('mongoose');
var Habits = require('./habit');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    email: String,
    tags: [String],
    yepd: [{
        time: {type: Date, default: Date.now},
        habit: {type: Schema.Types.ObjectId, ref: Habits}
    }],
    noped: [{
        time: {type: Date, default: Date.now},
        habit: {type: Schema.Types.ObjectId, ref: Habits}
    }]
}, {timestamps: true});


module.exports = mongoose.model('Users', UsersSchema);
