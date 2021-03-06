'use strict';

var Habit = require('../models/habit');
var http = require('http');
var Q = require('q');

class HabitService{

	static list() {
		return Habit.find();
	}

	static show(id) {
		return get(id);
	}

	static create(params) {
		return setParams(new Habit(), params).save();
	}

	static update(id, params) {
		var deferred = Q.defer();
		get(id).then((habit) => {
			if (!habit) {
				deferred.reject();
			}
			setParams(habit, params).save().then((habit) => {
				deferred.resolve(habit)
			}, (err) => {
				deferred.reject(err)
			})
		}, (err) => {
			deferred.reject(err)
		})

		return deferred.promise;
	}

	static delete(id) {
		var deferred = Q.defer();
		get(id).then((habit) => {
			if (!habit) {
				deferred.reject();
			}
			habit.remove().then(() => {
				deferred.resolve()
			}, (err) => {
				deferred.reject(err)
			})
		}, (err) => {
			deferred.reject(err)
		})

		return deferred.promise
	}

	// Mock random. Gets random Chuck norris joke and creates habit and returns it.
	// Maybe use this after we get proper data? https://www.npmjs.com/package/mongoose-simple-random
	// There was also: https://jira.mongodb.org/browse/SERVER-533
	static random() {
		var deferred = Q.defer();
		http.get("http://api.icndb.com/jokes/random/", (res) => {
			res.on('data', (data) => {
				var habit = this.create({value: JSON.parse(data).value.joke});
				deferred.resolve(habit)
			});
		}).on('error', (err) => {
			deferred.reject(err)
		});
		return deferred.promise;
	}

}

module.exports = HabitService;

/*
 * Private utility functions
 */
function setParams(habit, params) {
	habit.value = params.value;
	return habit
}

function get(id) {
	return Habit.findById(id);
}
