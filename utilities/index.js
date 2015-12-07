/**
 * When requiring a folder name without a filename, NodeJs searches for index.js file.
 * Created this folder as a reminder. 
 * When requiring this with require('utilitis'), it exports both cat and dog.
 **/
 
var dog = require('./dog');
var cat = require('./cat');

module.exports = {
	cat: cat,
	dog: dog
}