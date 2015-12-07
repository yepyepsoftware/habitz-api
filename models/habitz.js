// models/habitz.js

var mongoose     = require('mongoose');

var Schema       = mongoose.Schema;

var HabitzSchema   = new Schema({
    value: String
}, {timestamps: true});

module.exports = mongoose.model('Habitz', HabitzSchema);
