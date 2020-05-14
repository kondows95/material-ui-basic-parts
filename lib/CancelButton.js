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
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import { getLeftButtonStyle } from './styles';
import MyButton from './MyButton';
var useStyles = makeStyles(function (theme) { return ({
    item: getLeftButtonStyle(theme),
}); });
var CancelButton = function (props) {
    var classes = useStyles();
    var formatMessage = useIntl().formatMessage;
    return (React.createElement(Box, { className: classes.item },
        React.createElement(MyButton, __assign({}, props, { label: formatMessage({ id: 'MUIBP.cancel', defaultMessage: 'Cancel' }), variant: "contained", fullWidth: true, "data-testid": "cancel-button" }))));
};
export default CancelButton;
