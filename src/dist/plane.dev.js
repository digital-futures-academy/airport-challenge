"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Plane =
/*#__PURE__*/
function () {
  // here's a starting point for you
  function Plane(name) {
    _classCallCheck(this, Plane);

    this.name = name;
    this.isFlying = false;
  } //this function changes the boolean parameter to true and returns the name of the plane flying


  _createClass(Plane, [{
    key: "getPlaneFlying",
    value: function getPlaneFlying() {
      this.isFlying = true;
      console.log("it is ".concat(this.isFlying, " that ").concat(this.name, " is currently flying"));
      return this.name;
    }
  }]);

  return Plane;
}();

module.exports = Plane;