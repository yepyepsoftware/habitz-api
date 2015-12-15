'use strict';

var router = require('express').Router();
var User  = require('../models/user');
var Q = require('q');

class UserService {
  
  static list() {
    return User.find();
  }
  
  static create(params) {
    return setParams(new User(), params).save();
  }
  
  static show(id) {
    return User.findById(id);
  }
  
  static update(id, params) {
    var deferred = Q.defer();
		User.findById(id)
			.then(user => {
				if (!user) {
					deferred.reject();
				}
				setParams(user, params).save()	
				.then( user => 
					deferred.resolve(user)
				, err => 
					deferred.reject(err)
				)
			}
			
		, err =>
			deferred.reject(err)
		)
		return deferred.promise;
  }
  
  static delete(id) {
		var deferred = Q.defer();
		User.findById(id)
			.then( user => {
				if (!user) {
					deferred.reject();
				}
				user.remove()
					.then(() =>
						deferred.resolve()
					, err =>
						deferred.reject(err)
					)
			}
			, err =>
				deferred.reject(err)
			)
		
		return deferred.promise
	}
  
}

module.exports = UserService;

/**
 * Private utility functions
 **/

function setParams(user, params) {
  	user.email = params.email || user.email;
	
	if (params.yepd) {
		user.yepd.push({
			time: new Date(),
			habit: params.yepd
		});
	}
	
	if (params.noped) {
		user.noped.push({
			time: new Date(),
			habit: params.noped
		});
	}
	
  	return user;
}