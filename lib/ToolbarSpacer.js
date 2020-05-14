import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
var useStyles = makeStyles(function (theme) { return ({
    toolbar: theme.mixins.toolbar,
}); });
var ToolbarSpacer = function () {
    var classes = useStyles();
    return React.createElement("div", { className: classes.toolbar });
};
export default ToolbarSpacer;
