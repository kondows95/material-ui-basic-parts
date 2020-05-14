import React from 'react';
import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import { getButtonLoadingStyle, getRightButtonStyle } from './styles';
import MyButton from './MyButton';

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

    return (
        <Box className={classes.item}>
            <MyButton
                {...myProp}
                label={formatMessage({ id: 'MUIBP.submit', defaultMessage: 'Submit' })}
                loading={loading}
                type="submit"
                color="primary"
                fullWidth
                data-testid="submit-button"
            />
        </Box>
    );
};
export default SubmitButton;
