"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Debounce = exports.Debounce = function Debounce(func, delay) {
    var isDebounced = undefined;
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        clearTimeout(isDebounced);
        return isDebounced = setTimeout(function () {
            func.apply(undefined, args);
        }, delay);
    };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Debounce, "Debounce", "src/components/Utils/index.js");
}();

;