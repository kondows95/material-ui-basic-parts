import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
var useStyles = makeStyles(function (theme) { return ({
    paper: {
        margin: theme.spacing(2, 1, 0),
        padding: theme.spacing(2),
        display: 'grid',
    },
}); });
var MyPaper = function (props) {
    var classes = useStyles();
    return React.createElement(Paper, { className: classes.paper }, props.children);
};
export default MyPaper;
