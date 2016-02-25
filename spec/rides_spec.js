var rides = require('../lib/rides')

describe('rides', function(){
  it('determines when a child is too short', function() {
    var child1 = {
    height: 4,
    name: "Lucifer",
    age: 3
    };

    var child2 = {
    height: 5,
    name: "Seany",
    age: 4
    };

    var ride1 = {
    minHeight: 5,
    maxHeight: 7
    };

    var ride2 = {
    minHeight: 2,
    maxHeight: 5
    };





    expect(rides.isTallEnough(child1, ride1)).toEqual(false);
    expect(rides.isTallEnough(child2, ride2)).toEqual(true);
      });
    });

describe('rides', function(){
    it('determines when a child is tall enough', function() {
      var child1 = {
      height: 4,
      name: "Lucifer",
      age: 3
      };

      var child2 = {
      height: 5,
      name: "Seany",
      age: 4
      };

      var ride1 = {
      minHeight: 5,
      maxHeight: 7
      };

      var ride2 = {
      minHeight: 2,
      maxHeight: 5
      };

  expect(rides.isTallEnough(child1, ride1)).toEqual(false);
  expect(rides.isTallEnough(child2, ride2)).toEqual(true);

});


});
