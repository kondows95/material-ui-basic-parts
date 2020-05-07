import React, { PropsWithChildren } from 'react';
import { Button, Box, CircularProgress, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';

const useStyles = makeStyles((theme: Theme) => ({
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -9,
        marginLeft: -12,
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2, 0, 1), //TXB
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(1, 0, 1, 1), //TRBL
        },
    },
}));

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    loading?: boolean;
}

const SubmitButton: React.FC<PropsWithChildren<Props>> = (props) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    const loading = props.loading ? true : false;
    const myProp: Props = {};
    for (const key of Object.keys(props)) {
        if (key !== 'loading') {
            myProp[key] = props[key];
        }
    }

    let progress = null;
    if (loading) {
        progress = <CircularProgress size={20} color="primary" className={classes.progress} />;
    }

    return (
        <Box className={classes.item}>
            <Button
                {...myProp}
                disabled={loading}
                variant="contained"
                type="submit"
                color="primary"
                fullWidth
                data-testid="submit-button"
            >
                {formatMessage({ id: 'MUIBP.submit', defaultMessage: 'Submit' })}
                {progress}
            </Button>
        </Box>
    );
};
export default SubmitButton;
