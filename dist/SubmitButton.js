"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const react_intl_1 = require("react-intl");
const styles_2 = require("./styles");
const useStyles = styles_1.makeStyles((theme) => ({
    progress: styles_2.getButtonLoadingStyle(),
    item: styles_2.getRightButtonStyle(theme),
}));
const SubmitButton = (props) => {
    const classes = useStyles();
    const { formatMessage } = react_intl_1.useIntl();
    const loading = props.loading ? true : false;
    const myProp = {};
    for (const key of Object.keys(props)) {
        if (key !== 'loading') {
            myProp[key] = props[key];
        }
    }
    let progress = null;
    if (loading) {
        progress = react_1.default.createElement(core_1.CircularProgress, { size: 20, color: "primary", className: classes.progress });
    }
    return (react_1.default.createElement(core_1.Box, { className: classes.item },
        react_1.default.createElement(core_1.Button, Object.assign({}, myProp, { disabled: loading, variant: "contained", type: "submit", color: "primary", fullWidth: true, "data-testid": "submit-button" }),
            formatMessage({ id: 'MUIBP.submit', defaultMessage: 'Submit' }),
            progress)));
};
exports.default = SubmitButton;
