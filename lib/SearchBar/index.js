'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = exports.SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SearchBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), Object.defineProperty(_this, 'state', {
            enumerable: true,
            writable: true,
            value: {
                expand: false
            }
        }), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SearchBar, [{
        key: '_onExpandBtnClick',
        value: function _onExpandBtnClick() {
            this.setState({ expand: !this.state.expand });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                style = _props.style,
                placeholder = _props.placeholder,
                autocomplete = _props.autocomplete,
                onInputChange = _props.onInputChange,
                children = _props.children;

            var finalClassName = (0, _classnames2.default)('search-bar', className, this.state.expand ? "search-bar_expand" : "");

            return _react2.default.createElement(
                'div',
                { className: finalClassName, style: style },
                _react2.default.createElement(
                    'div',
                    { className: 'search-bar__btn',
                        onClick: this._onExpandBtnClick.bind(this) },
                    _react2.default.createElement(
                        'svg',
                        { className: 'icon',
                            viewBox: '0 0 1024 1024',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '25',
                            height: '25' },
                        _react2.default.createElement('path', {
                            d: 'M921.6 563.2 546.133333 563.2l0 375.466667-85.333333 0L460.8 563.2 85.333333 563.2l0-85.333333 375.466667 0L460.8 102.4l85.333333 0 0 375.466667 375.466667 0L921.6 563.2z',
                            fill: '#4285F4' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'search-bar__input' },
                    _react2.default.createElement('input', { type: 'text',
                        placeholder: placeholder ? placeholder : "Search",
                        onChange: onInputChange }),
                    autocomplete ? _react2.default.createElement(
                        'ul',
                        { className: "search-bar__list" },
                        children
                    ) : ""
                )
            );
        }
    }]);

    return SearchBar;
}(_react2.default.Component);

;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(SearchBar, 'SearchBar', 'src/components/SearchBar/index.js');
}();

;