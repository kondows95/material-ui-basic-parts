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
var react_intl_1 = require("react-intl");
var MyButton_1 = __importDefault(require("./MyButton"));
var ignoreKeys = ['open', 'onConfirmed', 'onClose'];
var ConfirmDialog = function (props) {
    var formatMessage = react_intl_1.useIntl().formatMessage;
    var copyProps = {};
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (ignoreKeys.indexOf(key) === -1) {
            copyProps[key] = props[key];
        }
    }
    var msgId = 'MUBP.ConfirmDialog';
    var msgIdTitle = msgId + 'Title';
    var msgIdCancel = msgId + 'Cancel';
    var msgIdOk = msgId + 'Ok';
    return (react_1.default.createElement(core_1.Dialog, __assign({}, copyProps, { open: props.open, onClose: props.onClose, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", "data-testid": msgId }),
        react_1.default.createElement(core_1.DialogTitle, { id: "alert-dialog-title", "data-testid": msgIdTitle }, formatMessage({ id: msgIdTitle, defaultMessage: 'Are you sure?' })),
        react_1.default.createElement(core_1.DialogActions, null,
            react_1.default.createElement(MyButton_1.default, { label: formatMessage({ id: msgIdCancel, defaultMessage: 'Cancel' }), onClick: props.onClose, "data-testid": msgIdCancel }),
            react_1.default.createElement(MyButton_1.default, { label: formatMessage({ id: msgIdOk, defaultMessage: 'OK' }), onClick: props.onConfirmed, color: "primary", autoFocus: true, "data-testid": msgIdOk }))));
};
exports.default = ConfirmDialog;
