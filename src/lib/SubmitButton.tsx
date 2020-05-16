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
    label?: string;
    loading?: boolean;
}

interface CopyProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const SubmitButton: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const loading = props.loading ? true : false;

    const copyProps: CopyProps = {};
    for (const key of Object.keys(props)) {
        if (key !== 'label' && key !== 'loading') {
            copyProps[key] = props[key];
        }
    }

    const msgId = 'MUBP.SubmitButton';
    return (
        <Box className={classes.item}>
            <MyButton
                {...copyProps}
                label={props.label || formatMessage({ id: msgId, defaultMessage: 'Submit' })}
                loading={loading}
                type="submit"
                color="primary"
                fullWidth
                data-testid={msgId}
            />
        </Box>
    );
};
export default SubmitButton;
