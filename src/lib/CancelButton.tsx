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
}

const CancelButton: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    return (
        <Box className={classes.item}>
            <MyButton
                {...props}
                label={formatMessage({ id: 'MUIBP.cancel', defaultMessage: 'Cancel' })}
                variant="contained"
                fullWidth
                data-testid="cancel-button"
            />
        </Box>
    );
};
export default CancelButton;
