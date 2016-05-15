'use strict';

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _dec5, _desc2, _value2, _obj;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

// 既然装饰器是函数，我当然可以用函数工厂了
function log(message) {
    return function () {
        console.log(message);
    };
}

var Bar = (_dec = log('class Bar'), _dec2 = log('class method bar'), _dec3 = log('class getter alice'), _dec4 = log('class property bob'), _dec(_class = (_class2 = function () {
    function Bar() {
        (0, _classCallCheck3.default)(this, Bar);

        _initDefineProp(this, 'bob', _descriptor, this);
    }

    (0, _createClass3.default)(Bar, [{
        key: 'bar',
        value: function bar() {}
    }, {
        key: 'alice',
        get: function get() {}
    }]);
    return Bar;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'bar', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'bar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'alice', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'alice'), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, 'bob', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return 1;
    }
})), _class2)) || _class);


var bar = (_dec5 = log('object method bar'), (_obj = {
    bar: function bar() {}
}, (_applyDecoratedDescriptor(_obj, 'bar', [_dec5], (0, _getOwnPropertyDescriptor2.default)(_obj, 'bar'), _obj)), _obj));