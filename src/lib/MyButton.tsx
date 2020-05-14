import React from 'react';
import { Button, CircularProgress, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getButtonLoadingStyle } from './styles';

const useStyles = makeStyles(() => ({
    progress: getButtonLoadingStyle(),
}));

const ignoreKeys = ['label', 'icon', 'loading'];
type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    label: string;
    icon?: React.ReactElement;
    loading?: boolean;
};

type CopyProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};

const MyButton: React.FC<Props> = (props) => {
    const classes = useStyles();

    const loading = props.loading ? true : false;
    const copyProps: CopyProps = {};
    for (const key of Object.keys(props)) {
        if (ignoreKeys.indexOf(key) === -1) {
            copyProps[key] = props[key];
        }
    }

    let progress = null;
    if (loading) {
        progress = <CircularProgress size={20} color="primary" className={classes.progress} />;
    }

    let icon = null;
    if (props.icon) {
        icon = <Box ml={1}>{props.icon}</Box>;
    }

    return (
        <Button {...copyProps} disabled={loading} variant="contained" fullWidth>
            {icon}
            {props.label}
            {progress}
        </Button>
    );
};
export default MyButton;
