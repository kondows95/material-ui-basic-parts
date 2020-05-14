"use strict";
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
    return react_1.default.createElement(core_1.Paper, { className: classes.paper }, props.children);
};
exports.default = MyPaper;
