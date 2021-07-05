"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Plane = require('../src/plane');

var Weather = require('../src/weather');

var Airport =
/*#__PURE__*/
function () {
  function Airport(capacity) {
    _classCallCheck(this, Airport);

    this.landedPlane = ['plane 1'];
    this.capacity = capacity;
  } //this function changes the isflying parameter in the plane class to false, adds the plane to the landed array and returns the list of landed planes


  _createClass(Airport, [{
    key: "landPlane",
    value: function landPlane(planeName) {
      var weather = new Weather();
      var checkIfFull = this.isFull();
      var checkWeather = weather.checkIfStormy(); //if statement to check if weather is strormy 

      if (checkWeather) {
        return "The weather is stormy hence, ".concat(planeName, " cannot land");
      } //else statement for if the weather is not stormy
      else {
          //if statement to check if plane has landed 
          if (this.landedPlane.includes(planeName)) {
            return "".concat(planeName, " has already landed");
          } //else statement for if plane has not landed 
          else {
              // if statement to check if airport is full
              if (checkIfFull) {
                return 'plane cannot land yet, the landing area is full';
              } //else statement fot is the airport is not full
              else {
                  var plane = new Plane(planeName);
                  plane.isFlying = false;
                  this.landedPlane.push(planeName);
                  console.log("it is ".concat(plane.isFlying, " that the plane is flying"));
                  console.log("".concat(plane.name, " has successfully landed"));
                  return this.landedPlane;
                }
            }
        }
    } //this function check if the capacity passed in is an int and a positive number

  }, {
    key: "getCapacity",
    value: function getCapacity() {
      if (Number.isInteger(this.capacity) && this.capacity > 0) {
        return "current capacity is ".concat(this.capacity);
      } else {
        return 'you have entered a wrong capacity';
      }
    } //this function check if the length of landed plane has exceeded the allowed capacity

  }, {
    key: "isFull",
    value: function isFull() {
      console.log("current capacity is ".concat(this.capacity));
      console.log("current number of plane landed is ".concat(this.landedPlane.length));

      if (this.landedPlane.length >= this.capacity) {
        return true;
      } else {
        return false;
      }
    } //this function checks if the plane is in landed list, if not it pops the name of the plane from the landedplane arrays and changes the isflying to true, if yes it returns an error

  }, {
    key: "takeOff",
    value: function takeOff(planeName) {
      var weather = new Weather();
      var checkWeather = weather.checkIfStormy(); //if statement to check if weather is strormy 

      if (checkWeather) {
        return "The weather is stormy hence, ".concat(planeName, " cannot takeoff");
      } else {
        var plane = new Plane(planeName); // console.log(this.landedPlane.includes(planeName));

        if (this.landedPlane.includes(planeName)) {
          plane.isFlying = true;
          this.landedPlane.pop(planeName);
          return "".concat(planeName, " has successfully taken off");
        } else {
          return "".concat(planeName, " is already flying");
        }
      }
    }
  }, {
    key: "countPlanes",
    value: function countPlanes() {
      return this.landedPlane.length();
    }
  }]);

  return Airport;
}(); // let airport = new Airport(1);
// airport = airport.takeOff('plane 2');
// console.log(airport);


module.exports = Airport;