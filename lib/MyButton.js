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
var styles_2 = require("./styles");
var useStyles = styles_1.makeStyles(function () { return ({
    progress: styles_2.getButtonLoadingStyle(),
}); });
var ignoreKeys = ['label', 'icon', 'loading'];
var MyButton = function (props) {
    var classes = useStyles();
    var loading = props.loading ? true : false;
    var copyProps = {};
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (ignoreKeys.indexOf(key) === -1) {
            copyProps[key] = props[key];
        }
    }
    var progress = null;
    if (loading) {
        progress = react_1.default.createElement(core_1.CircularProgress, { size: 20, color: "primary", className: classes.progress });
    }
    var icon = null;
    if (props.icon) {
        icon = (react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center", justifyContent: "center", mr: 1 }, props.icon));
    }
    return (react_1.default.createElement(core_1.Button, __assign({}, copyProps, { disabled: loading, variant: "contained", fullWidth: true }),
        icon,
        props.label,
        progress));
};
exports.default = MyButton;
