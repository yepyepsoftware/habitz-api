// models/habit.js

var mongoose = require('mongoose');
var User = require('./user');
var Schema = mongoose.Schema; 

var HabitSchema = new Schema({
    value: String,
    /*createdBy: {type: Schema.Types.ObjectId, ref: User},
    yepd: [{
        time: {type: Date, default: Date.now},
        user: {type: Schema.Types.ObjectId, ref: User}
    }],
    noped: [{
        time: {type: Date, default: Date.now},
        user: {type: Schema.Types.ObjectId, ref: User}
    }]*/
}, {timestamps: true});

module.exports = mongoose.model('Habit', HabitSchema);
