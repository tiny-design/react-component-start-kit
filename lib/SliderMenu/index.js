'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SliderMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderMenu = exports.SliderMenu = function (_React$Component) {
    _inherits(SliderMenu, _React$Component);

    function SliderMenu() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SliderMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SliderMenu.__proto__ || Object.getPrototypeOf(SliderMenu)).call.apply(_ref, [this].concat(args))), _this), Object.defineProperty(_this, 'state', {
            enumerable: true,
            writable: true,
            value: {
                curr: 0
            }
        }), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SliderMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var container = _reactDom2.default.findDOMNode(this).querySelector('.slider-menu__item-container');
            var containerWrapper = _reactDom2.default.findDOMNode(this.refs.containerWrapper);
            var slider = container.querySelector('.slider-menu__slider');
            var offsetWidth = container.offsetWidth;

            var unitOffsetWidth = offsetWidth / this.props.children.length;

            containerWrapper.style.width = unitOffsetWidth * this.props.displayLength + 'px';

            slider.style.width = unitOffsetWidth + 'px';
            var self = this;
            this.props.children.forEach(function (childNode, i) {
                var child = _reactDom2.default.findDOMNode(_this2.refs[i]);
                child.addEventListener('click', function () {
                    return self._onItemClick(i);
                });
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var container = _reactDom2.default.findDOMNode(this).querySelector('.slider-menu__item-container');
            var slider = container.querySelector('.slider-menu__slider');
            var offsetWidth = container.offsetWidth;

            var unitOffsetWidth = offsetWidth / this.props.children.length;
            var timeline = _animejs2.default.timeline();
            var frames = [{
                targets: slider,
                translateX: this.state.curr * unitOffsetWidth + 'px',
                easing: 'easeInOutQuart',
                duration: 600
            }];
            timeline.add(frames);
        }
    }, {
        key: '_onItemClick',
        value: function _onItemClick(curr) {
            this.setState({ curr: curr });
        }
    }, {
        key: '_onBtnLeftClick',
        value: function _onBtnLeftClick() {
            var container = _reactDom2.default.findDOMNode(this).querySelector('.slider-menu__item-container-wrapper');
            (0, _animejs2.default)({
                targets: container,
                scrollLeft: '-=100',
                easing: 'easeInOutQuart'
            });
        }
    }, {
        key: '_onBtnRightClick',
        value: function _onBtnRightClick() {
            var container = _reactDom2.default.findDOMNode(this).querySelector('.slider-menu__item-container-wrapper');
            (0, _animejs2.default)({
                targets: container,
                scrollLeft: '+=100',
                easing: 'easeInOutQuart'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                style = _props.style,
                displayLength = _props.displayLength;

            var finalClassName = (0, _classnames2.default)('slider-menu', className);

            return _react2.default.createElement(
                'div',
                { className: finalClassName, style: style },
                displayLength && displayLength < children.length ? _react2.default.createElement(
                    'div',
                    { className: 'slider-menu__btn',
                        onClick: this._onBtnLeftClick.bind(this) },
                    _react2.default.createElement(
                        'svg',
                        { className: 'icon',
                            height: '30px',
                            viewBox: '0 0 1024 1024',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg' },
                        _react2.default.createElement('path', { fill: '#ffffff',
                            d: 'M347.2 511.87199999999996c4.336808689942018e-19-0.003 8.673617379884035e-19-0.006 1.734723475976807e-18-0.008 1.7763568394002505e-15-9.137 3.8290000000000033-17.379 9.970000000000006-23.21l265.614-251.2769999999999c5.720000000000001-5.415 13.464000000000002-8.742999999999999 21.984-8.743999999999996 17.678 3.552713678800501e-15 32.008 14.330000000000005 32.007999999999996 32.008-1.7763568394002505e-15 9.157-3.8450000000000033 17.416-10.009000000000007 23.25l-241.10300000000004 228.04499999999993 241.08799999999997 228.22400000000002c6.164999999999999 5.855000000000001 10.000999999999996 14.113000000000001 10.000999999999998 23.266000000000002-8.881784197001252e-16 8.516-3.320000000000002 16.256-8.736000000000004 21.997999999999998-12.145000000000003 12.784-32.434 13.359999999999994-45.233 1.2639999999999958l-265.5999999999999-251.52c-6.155-5.844000000000001-9.983999999999998-14.086000000000004-9.983999999999996-23.222999999999995 3.469446951953614e-18-0.025 3.469446951953614e-18-0.05099999999999999 1.3877787807814457e-17-0.076z' })
                    )
                ) : '',
                _react2.default.createElement(
                    'div',
                    { style: { overflow: 'hidden' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'slider-menu__item-container-wrapper',
                            ref: 'containerWrapper' },
                        _react2.default.createElement(
                            'div',
                            { className: 'slider-menu__item-container' },
                            _react2.default.Children.map(children, function (ele, idx) {
                                return _react2.default.cloneElement(ele, { ref: idx });
                            }),
                            _react2.default.createElement('div', { className: 'slider-menu__slider' })
                        )
                    )
                ),
                displayLength && displayLength < children.length ? _react2.default.createElement(
                    'div',
                    { className: 'slider-menu__btn',
                        onClick: this._onBtnRightClick.bind(this) },
                    _react2.default.createElement(
                        'svg',
                        { className: 'icon',
                            height: '30px',
                            viewBox: '0 0 1024 1024',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg' },
                        _react2.default.createElement('path', { fill: '#ffffff',
                            d: 'M676.8 512.128a32 32 0 0 1-9.984000000000004 23.231999999999996l-265.6 251.26399999999998a32 32 0 0 1-43.96799999999999-46.528l241.08800000000008-228.03199999999998-241.08799999999997-228.22400000000002a32.064 32.064 0 0 1-1.279999999999994-45.248c12.160000000000004-12.799999999999999 32.448-13.375999999999992 45.248-1.279999999999994l265.5999999999999 251.52a32 32 0 0 1 9.983999999999995 23.296z' })
                    )
                ) : ''
            );
        }
    }]);

    return SliderMenu;
}(_react2.default.Component);

Object.defineProperty(SliderMenu, 'propTypes', {
    enumerable: true,
    writable: true,
    value: {
        displayLength: _propTypes2.default.number
    }
});
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(SliderMenu, 'SliderMenu', 'src/components/SliderMenu/index.js');
}();

;