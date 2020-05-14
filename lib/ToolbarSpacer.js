"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    toolbar: theme.mixins.toolbar,
}); });
var ToolbarSpacer = function () {
    var classes = useStyles();
    return react_1.default.createElement("div", { className: classes.toolbar });
};
exports.default = ToolbarSpacer;
