import React from 'react';
import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import { getLeftButtonStyle } from './styles';
import MyButton from './MyButton';

const useStyles = makeStyles((theme: Theme) => ({
    item: getLeftButtonStyle(theme),
}));

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    label?: string;
}

interface CopyProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const CancelButton: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    const copyProps: CopyProps = {};
    for (const key of Object.keys(props)) {
        if (key !== 'label') {
            copyProps[key] = props[key];
        }
    }

    const msgId = 'MUBP.CancelButton';
    return (
        <Box className={classes.item}>
            <MyButton
                {...copyProps}
                label={props.label || formatMessage({ id: msgId, defaultMessage: 'Cancel' })}
                variant="contained"
                fullWidth
                data-testid={msgId}
            />
        </Box>
    );
};
export default CancelButton;
