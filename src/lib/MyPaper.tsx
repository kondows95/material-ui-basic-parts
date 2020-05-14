import React, { PropsWithChildren } from 'react';
import { Paper, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        margin: theme.spacing(2, 1, 0), //TXB,
        padding: theme.spacing(2),
        display: 'grid',
    },
}));

const MyPaper: React.FC<PropsWithChildren<{}>> = (props) => {
    const classes = useStyles();
    return <Paper className={classes.paper}>{props.children}</Paper>;
};

export default MyPaper;
