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
var useStyles = styles_1.makeStyles(function (theme) { return ({
    paper: {
        margin: theme.spacing(2, 1, 0),
        padding: theme.spacing(2),
        display: 'grid',
    },
}); });
var MyPaper = function (props) {
    var classes = useStyles();
    var copyProps = {};
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'children') {
            copyProps[key] = props[key];
        }
    }
    return (react_1.default.createElement(core_1.Paper, __assign({}, copyProps, { className: classes.paper }), props.children));
};
exports.default = MyPaper;
