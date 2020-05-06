import React from 'react';
import { Button, Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2, 0, 1), //TXB
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 1, 1, 0), //TRBL
        },
    },
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
            <Button {...props} variant="contained" fullWidth data-testid="cancel-button">
                {formatMessage({ id: 'MUIBP.cancel', defaultMessage: 'Cancel' })}
            </Button>
        </Box>
    );
};
export default CancelButton;
