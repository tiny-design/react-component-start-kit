'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                onClick = _props.onClick,
                uppercase = _props.uppercase,
                className = _props.className,
                type = _props.type,
                isRound = _props.isRound,
                size = _props.size,
                disabled = _props.disabled,
                isOutline = _props.isOutline;

            var finalClassName = (0, _classnames2.default)('tiny-btn', { 'tiny-btn-outline': isOutline }, { 'tiny-btn-rose': type === 'rose' && !isOutline }, { 'tiny-btn-rose-outline': type === 'rose' && isOutline }, { 'tiny-btn-success': type === 'success' && !isOutline }, { 'tiny-btn-success-outline': type === 'success' && isOutline }, { 'tiny-btn-danger': type === 'danger' && !isOutline }, { 'tiny-btn-danger-outline': type === 'danger' && isOutline }, { 'tiny-btn-primary': type === 'primary' && !isOutline }, { 'tiny-btn-primary-outline': type === 'primary' && isOutline }, { 'tiny-btn-info': type === 'info' && !isOutline }, { 'tiny-btn-info-outline': type === 'info' && isOutline }, { 'tiny-btn-warning': type === 'warning' && !isOutline }, { 'tiny-btn-warning-outline': type === 'warning' && isOutline }, { 'tiny-btn-round': isRound }, { 'tiny-btn-lg': size === 'lg' }, { 'tiny-btn-sm': size === 'sm' }, { 'tiny-btn-xs': size === 'xs' }, { 'tiny-btn-disabled': disabled }, className);
            return _react2.default.createElement(
                'button',
                {
                    disabled: disabled,
                    className: finalClassName,
                    style: { textTransform: uppercase ? 'uppercase' : 'default' },
                    onClick: onClick },
                children
            );
        }
    }]);

    return Button;
}(_react.Component);

exports.default = Button;


Button.propTypes = {
    onClick: _propTypes2.default.func,
    type: _propTypes2.default.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'rose']), //primary, success, info, warning, danger, rose
    size: _propTypes2.default.oneOf(['default', 'lg', 'sm', 'xs']), //lg - large, sm - small, xs - xsmall
    uppercase: _propTypes2.default.bool,
    isRound: _propTypes2.default.bool,
    isOutline: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    className: _propTypes2.default.string
};

Button.defaultProps = {
    isRound: false,
    disabled: false,
    isOutline: false,
    uppercase: true,
    type: 'default',
    size: 'default'
};