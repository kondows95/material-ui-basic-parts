"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var MyButton_1 = __importDefault(require("./MyButton"));
var SubmitButton = function (props) {
    var formatMessage = react_intl_1.useIntl().formatMessage;
    var copyProps = {};
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'loading') {
            copyProps[key] = props[key];
        }
    }
    var msgId = 'MUBP.SubmitButton';
    return (react_1.default.createElement(MyButton_1.default, __assign({}, copyProps, { label: formatMessage({ id: msgId, defaultMessage: 'Submit' }), loading: props.loading ? true : false, type: "submit", color: "primary", fullWidth: true })));
};
exports.default = SubmitButton;
