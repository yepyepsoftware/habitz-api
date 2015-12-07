'use strict';

var Habitz = require('../models/habitz');
var Q = require('q');

class HabitzService{

	static list() {
		return Habitz.find().exec();
	}
	
	static show(id) {
		return get(id);
	}
	
	static create(params) {
		return setParams(new Habitz(), params).save();
	}
	
	static update(id, params) {
		var deferred = Q.defer();
		get(id)
			.then((habitz) => {
				if (!habitz) {
					deferred.reject();
				}
				setParams(habitz, params).save()	
				.then((habitz) => 
					deferred.resolve(habitz)
				, (err) => 
					deferred.reject(err)
				)
			}
			
		, (err) =>
			deferred.reject(err)
		)
		return deferred.promise;
	}
	
	static delete(id) {
		var deferred = Q.defer();
		get(id)
			.then((habitz) => {
				if (!habitz) {
					deferred.reject();
				}
				habitz.remove()
					.then(() =>
						deferred.resolve()
					, (err) =>
						deferred.reject(err)
					)
			}
			, (err) =>
				deferred.reject(err)
			)
		
		return deferred.promise
	}
	
}

module.exports = HabitzService;

/*
 * Private utility functions
*/
function setParams(habitz, params) {
	habitz.value = params.value;
	return habitz
}

function get(id) {
	return Habitz.findById(id)
}