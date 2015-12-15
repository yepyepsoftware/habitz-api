'use strict';

var Habit = require('../models/habit');
var Q = require('q');

class HabitService{

	static list() {
		return Habit.find();
	}
	
	static show(id) {
		return Habit.findById(id);
	}
	
	static create(params) {
		return setParams(new Habit(), params).save();
	}
	
	static update(id, params) {
		var deferred = Q.defer();
		Habit.findById(id).then((habit) => {
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
		Habit.findById(id).then((habit) => {
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
	
}

module.exports = HabitService;

/*
 * Private utility functions
 */
function setParams(habit, params) {
	habit.value = params.value;
	return habit
}