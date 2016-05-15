"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function countInstance(target) {
    var counter = new _map2.default();

    console.log(target);
    return function (_target) {
        (0, _inherits3.default)(_class, _target);

        function _class() {
            var _Object$getPrototypeO;

            (0, _classCallCheck3.default)(this, _class);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(_class)).call.apply(_Object$getPrototypeO, [this].concat(args)));

            var count = counter.get(target) || 0;
            counter.set(target, count + 1);
            return _this;
        }

        (0, _createClass3.default)(_class, [{
            key: "setCount",
            value: function setCount(count) {
                counter.set(target, count);
            }
        }, {
            key: "getCount",
            value: function getCount() {
                return counter.get(target);
            }
        }], [{
            key: "getInstanceCount",
            value: function getInstanceCount() {
                return counter.get(target) || 0;
            }
        }]);
        return _class;
    }(target);
}

var Bob = countInstance(_class2 = function Bob() {
    (0, _classCallCheck3.default)(this, Bob);
}) || _class2;

// ...


new Bob();
new Bob();

console.log(Bob.getInstanceCount()); // 2

var b = new Bob();
b.setCount(15);
console.log(b.getCount());