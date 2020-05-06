"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const react_intl_1 = require("react-intl");
const useStyles = styles_1.makeStyles((theme) => ({
    item: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2, 0, 1),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 1, 1, 0),
        },
    },
}));
const CancelButton = (props) => {
    const classes = useStyles();
    const { formatMessage } = react_intl_1.useIntl();
    return (react_1.default.createElement(core_1.Box, { className: classes.item },
        react_1.default.createElement(core_1.Button, Object.assign({}, props, { variant: "contained", fullWidth: true, "data-testid": "cancel-button" }), formatMessage({ id: 'MUIBP.cancel', defaultMessage: 'Cancel' }))));
};
exports.default = CancelButton;
