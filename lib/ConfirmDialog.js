import React from 'react';
import { Box, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import { getButtonLoadingStyle, getConfirmDialogStyle } from './styles';
import MyButton from './MyButton';
var useStyles = makeStyles(function (theme) { return ({
    progress: getButtonLoadingStyle(),
    dialog: getConfirmDialogStyle(theme),
}); });
var ConfirmDialog = function (props) {
    var classes = useStyles();
    var formatMessage = useIntl().formatMessage;
    return (React.createElement(Box, { className: classes.dialog },
        React.createElement(Dialog, { open: props.open, onClose: props.onClose, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description" },
            React.createElement(DialogTitle, { id: "alert-dialog-title", "data-testid": "alert-dialog-title" }, formatMessage({ id: 'MUIBP.confirmDialogMessage', defaultMessage: 'Are you sure?' })),
            React.createElement(DialogActions, null,
                React.createElement(MyButton, { label: formatMessage({ id: 'MUIBP.cancel', defaultMessage: 'Cancel' }), onClick: props.onClose, "data-testid": "confirm-cancel" }),
                React.createElement(MyButton, { label: formatMessage({ id: 'MUIBP.ok', defaultMessage: 'OK' }), onClick: props.onConfirmed, "data-testid": "confirm-ok", color: "primary", autoFocus: true })))));
};
export default ConfirmDialog;
