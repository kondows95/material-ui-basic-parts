"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const styles_2 = require("./styles");
const useStyles = styles_1.makeStyles(() => ({
    progress: styles_2.getButtonLoadingStyle(),
}));
const ignoreKeys = ['label', 'icon', 'loading'];
const MyButton = (props) => {
    const classes = useStyles();
    const loading = props.loading ? true : false;
    const copyProps = {};
    for (const key of Object.keys(props)) {
        if (ignoreKeys.indexOf(key) === -1) {
            copyProps[key] = props[key];
        }
    }
    let progress = null;
    if (loading) {
        progress = react_1.default.createElement(core_1.CircularProgress, { size: 20, color: "primary", className: classes.progress });
    }
    let icon = null;
    if (props.icon) {
        icon = react_1.default.createElement(core_1.Box, { ml: 1 }, props.icon);
    }
    return (react_1.default.createElement(core_1.Button, Object.assign({}, copyProps, { disabled: loading, variant: "contained", color: "primary", fullWidth: true }),
        icon,
        props.label,
        progress));
};
exports.default = MyButton;
