"use strict";
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
    dialog: styles_2.getConfirmDialogStyle(theme),
}); });
var ConfirmDialog = function (props) {
    var classes = useStyles();
    var formatMessage = react_intl_1.useIntl().formatMessage;
    return (react_1.default.createElement(core_1.Box, { className: classes.dialog },
        react_1.default.createElement(core_1.Dialog, { open: props.open, onClose: props.onClose, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description" },
            react_1.default.createElement(core_1.DialogTitle, { id: "alert-dialog-title", "data-testid": "alert-dialog-title" }, formatMessage({ id: 'MUIBP.confirmDialogMessage', defaultMessage: 'Are you sure?' })),
            react_1.default.createElement(core_1.DialogActions, null,
                react_1.default.createElement(MyButton_1.default, { label: formatMessage({ id: 'MUIBP.cancel', defaultMessage: 'Cancel' }), onClick: props.onClose, "data-testid": "confirm-cancel" }),
                react_1.default.createElement(MyButton_1.default, { label: formatMessage({ id: 'MUIBP.ok', defaultMessage: 'OK' }), onClick: props.onConfirmed, "data-testid": "confirm-ok", color: "primary", autoFocus: true })))));
};
exports.default = ConfirmDialog;
