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
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -9,
        marginLeft: -12,
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 0, 1),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 0, 1, 1),
        },
    },
}));
const ConfirmDialog = (props) => {
    const classes = useStyles();
    const { formatMessage } = react_intl_1.useIntl();
    return (react_1.default.createElement(core_1.Box, { className: classes.item },
        react_1.default.createElement(core_1.Dialog, { open: props.open, onClose: props.onClose, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description" },
            react_1.default.createElement(core_1.DialogTitle, { id: "alert-dialog-title", "data-testid": "alert-dialog-title" }, formatMessage({ id: 'MUIBP.confirmDialogMessage', defaultMessage: 'Are you sure?' })),
            react_1.default.createElement(core_1.DialogActions, null,
                react_1.default.createElement(core_1.Button, { onClick: props.onClose, "data-testid": "confirm-cancel", color: "primary" }, formatMessage({ id: 'MUIBP.cancel', defaultMessage: 'Cancel' })),
                react_1.default.createElement(core_1.Button, { onClick: props.onConfirmed, "data-testid": "confirm-ok", color: "primary", autoFocus: true }, formatMessage({ id: 'MUIBP.ok', defaultMessage: 'OK' }))))));
};
exports.default = ConfirmDialog;
