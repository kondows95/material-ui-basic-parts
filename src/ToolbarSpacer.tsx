import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
}));

const ToolbarSpacer = (): React.ReactElement => {
    const classes = useStyles();
    return <div className={classes.toolbar} />;
};

export default ToolbarSpacer;
