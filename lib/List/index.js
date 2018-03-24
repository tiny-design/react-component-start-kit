'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItem = exports.List = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = exports.List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var timeline = _animejs2.default.timeline();
            var items = [];
            var animation = this.props.animation ? this.props.animation : {};
            _reactDom2.default.findDOMNode(this).querySelectorAll('.tiny-list__item').forEach(function (d, i) {
                var obj = Object.assign({
                    targets: d,
                    translateX: ["-50%", 0],
                    opacity: [0, 100],
                    easing: 'easeOutExpo',
                    duration: 600,
                    offset: '-=400'
                }, animation);
                if (i === 0) {
                    obj.delay = 300;
                }
                items.push(obj);
            });
            timeline.add(items);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                style = _props.style;

            var finalClassName = (0, _classnames2.default)('tiny-list', className);

            return _react2.default.createElement(
                'div',
                { className: finalClassName,
                    style: style },
                children
            );
        }
    }]);

    return List;
}(_react2.default.Component);

var ListItem = exports.ListItem = function (_React$Component2) {
    _inherits(ListItem, _React$Component2);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                children = _props2.children,
                className = _props2.className,
                style = _props2.style;

            var finalClassName = (0, _classnames2.default)('tiny-list__item', className);

            return _react2.default.createElement(
                'div',
                { className: finalClassName,
                    style: style },
                children
            );
        }
    }]);

    return ListItem;
}(_react2.default.Component);

;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(List, 'List', 'src/components/List/index.js');

    __REACT_HOT_LOADER__.register(ListItem, 'ListItem', 'src/components/List/index.js');
}();

;