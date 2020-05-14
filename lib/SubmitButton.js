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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var react_intl_1 = require("react-intl");
var styles_2 = require("./styles");
var MyButton_1 = __importDefault(require("./MyButton"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    progress: styles_2.getButtonLoadingStyle(),
    item: styles_2.getRightButtonStyle(theme),
}); });
var SubmitButton = function (props) {
    var classes = useStyles();
    var formatMessage = react_intl_1.useIntl().formatMessage;
    var loading = props.loading ? true : false;
    var myProp = {};
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'loading') {
            myProp[key] = props[key];
        }
    }
    return (react_1.default.createElement(core_1.Box, { className: classes.item },
        react_1.default.createElement(MyButton_1.default, __assign({}, myProp, { label: formatMessage({ id: 'MUIBP.submit', defaultMessage: 'Submit' }), loading: loading, type: "submit", color: "primary", fullWidth: true, "data-testid": "submit-button" }))));
};
exports.default = SubmitButton;
