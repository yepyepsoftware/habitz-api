// models/habitz.js

var mongoose     = require('mongoose');
var timestamps   = require('mongoose-timestamp');
var Schema       = mongoose.Schema;

var HabitzSchema   = new Schema({
    value: String
});

HabitzSchema.plugin(timestamps);

module.exports = mongoose.model('Habitz', HabitzSchema);
