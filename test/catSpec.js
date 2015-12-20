var expect = require("chai").expect;
var Cat = require('../src/utilities/cat');

describe("Cat", function(){
   describe("Meow()", function(){
       it("It should say meow", function(){
         var cat = new Cat()
         var sound = cat.meow()
         expect(sound).to.equal('meow');
       });
   });
});
