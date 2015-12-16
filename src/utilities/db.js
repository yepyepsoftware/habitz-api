'use strict'

var Habit = require('../models/habit');
var User = require('../models/user');

// Clear collections
Habit.remove({}, function(err) { 
   console.log('Habit collection cleared'); 
});

User.remove({}, function(err) { 
   console.log('User collection cleared'); 
});

// Add some test data;

var newHabit;
var newUser;

// Users
for (var i = 0; i < 10; i++) {
    newUser = new User;
    newUser.email = "Email " + i;
    newUser.tags = [],
    newUser.yepd = [],
    newUser.noped = [],
    newUser.save();
}

User.find({}).then((users) => {

    // Habits    
    for (var i = 0; i < 10; i++) {
        newHabit = new Habit;
        newHabit.value = "Habit " + i;
        newHabit.createdBy = users[getRandomInt(0,users.length-1)]._id;
        newHabit.save();
    }
    
    // Interactions
    Habit.find({}, '_id').then((habits) => {        
        for (var user in users) {
            
        }
        
    }, (err) => {
        console.log(err);
    });
    
}, (err) => {
    console.log(err);
});

/*
// Users
Habit.find({}, '_id').exec().then((habits) => {
    
    for (var i = 0; i < 10; i++) {
        user = new User;
        user.email = "Email " + i;
        user.tags = [],
        user.yepd = [{habit: habits[getRandomInt(0,9)]}],
        user.noped = [{habit: habits[getRandomInt(0,9)]}],
        user.save();
    }
}, (err) => {
    console.log(err);
});*/



// Helper functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}