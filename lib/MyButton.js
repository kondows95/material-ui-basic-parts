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
import { Button, CircularProgress, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getButtonLoadingStyle } from './styles';
var useStyles = makeStyles(function () { return ({
    progress: getButtonLoadingStyle(),
}); });
var ignoreKeys = ['label', 'icon', 'loading'];
var MyButton = function (props) {
    var classes = useStyles();
    var loading = props.loading ? true : false;
    var copyProps = {};
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (ignoreKeys.indexOf(key) === -1) {
            copyProps[key] = props[key];
        }
    }
    var progress = null;
    if (loading) {
        progress = React.createElement(CircularProgress, { size: 20, color: "primary", className: classes.progress });
    }
    var icon = null;
    if (props.icon) {
        icon = React.createElement(Box, { ml: 1 }, props.icon);
    }
    return (React.createElement(Button, __assign({}, copyProps, { disabled: loading, variant: "contained", fullWidth: true }),
        icon,
        props.label,
        progress));
};
export default MyButton;
