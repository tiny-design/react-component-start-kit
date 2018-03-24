'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MenuItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = exports.MenuItem = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem() {
        _classCallCheck(this, MenuItem);

        return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
    }

    _createClass(MenuItem, [{
        key: 'onClick',
        value: function onClick(e) {
            var parent = _reactDom2.default.findDOMNode(this);
            var ripple = _reactDom2.default.findDOMNode(this.refs.ripple);
            var box = parent.getBoundingClientRect();
            var offsetX = box.left;
            var offsetY = box.top;
            var width = box.width;
            var height = box.height;

            if (width > height) {
                height = width;
            } else {
                width = height;
            }

            var x = e.pageX - offsetX - width / 2;
            var y = e.pageY - offsetY - height / 2;

            ripple.style.transform = 'translate(' + x + '%, ' + y + '%)';
            ripple.style.width = width + 'px';
            ripple.style.height = height + 'px';
            ripple.className += ' menu-item__ripple_animated';

            setTimeout(function () {
                ripple.style.translate = 'translate(0%, 0%)';
                ripple.style.width = 0;
                ripple.style.height = 0;
                ripple.className = ripple.className.replace(' menu-item__ripple_animated', '');
            }, 600);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                className = _props.className,
                style = _props.style;

            var finalClassName = (0, _classnames2.default)('menu-item', className);
            return _react2.default.createElement(
                'div',
                { className: finalClassName,
                    style: style,
                    onClick: function onClick(evt) {
                        _this2.onClick(evt);
                        _this2.props.onClick ? _this2.props.onClick(evt) : '';
                    } },
                children,
                _react2.default.createElement('div', { ref: 'ripple',
                    className: 'menu-item__ripple' })
            );
        }
    }]);

    return MenuItem;
}(_react2.default.Component);

;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MenuItem, 'MenuItem', 'src/components/MenuItem/index.js');
}();

;