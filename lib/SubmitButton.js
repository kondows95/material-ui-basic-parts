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
import { getButtonLoadingStyle, getRightButtonStyle } from './styles';
import MyButton from './MyButton';
var useStyles = makeStyles(function (theme) { return ({
    progress: getButtonLoadingStyle(),
    item: getRightButtonStyle(theme),
}); });
var SubmitButton = function (props) {
    var classes = useStyles();
    var formatMessage = useIntl().formatMessage;
    var loading = props.loading ? true : false;
    var myProp = {};
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'loading') {
            myProp[key] = props[key];
        }
    }
    return (React.createElement(Box, { className: classes.item },
        React.createElement(MyButton, __assign({}, myProp, { label: formatMessage({ id: 'MUIBP.submit', defaultMessage: 'Submit' }), loading: loading, type: "submit", color: "primary", fullWidth: true, "data-testid": "submit-button" }))));
};
export default SubmitButton;
