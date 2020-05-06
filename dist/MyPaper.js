"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const useStyles = styles_1.makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(2, 1, 0),
        padding: theme.spacing(2),
        display: 'grid',
    },
}));
const MyPaper = (props) => {
    const classes = useStyles();
    return react_1.default.createElement(core_1.Paper, { className: classes.paper }, props.children);
};
exports.default = MyPaper;
