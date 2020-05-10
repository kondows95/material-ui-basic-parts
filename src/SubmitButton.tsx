import React from 'react';
import { Button, Box, CircularProgress, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import { getButtonLoadingStyle, getRightButtonStyle } from './styles';

const useStyles = makeStyles((theme: Theme) => ({
    progress: getButtonLoadingStyle(),
    item: getRightButtonStyle(theme),
}));

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    loading?: boolean;
}

const SubmitButton: React.FC<Props> = (props) => {
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
