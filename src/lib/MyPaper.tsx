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

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};

const MyPaper: React.FC<PropsWithChildren<Props>> = (props) => {
    const classes = useStyles();

    const copyProps: Props = {};
    for (const key of Object.keys(props)) {
        if (key !== 'children') {
            copyProps[key] = props[key];
        }
    }

    return (
        <Paper {...copyProps} className={classes.paper}>
            {props.children}
        </Paper>
    );
};

export default MyPaper;
