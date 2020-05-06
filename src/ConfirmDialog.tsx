import React, { PropsWithChildren } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle, Theme } from '@material-ui/core';
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
            padding: theme.spacing(1, 0, 1), //TXL
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 0, 1, 1), //TRBL
        },
    },
}));

interface Props {
    open: boolean;
    onConfirmed: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ConfirmDialog: React.FC<PropsWithChildren<Props>> = (props) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    return (
        <Box className={classes.item}>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" data-testid="alert-dialog-title">
                    {formatMessage({ id: 'MUIBP.confirmDialogMessage', defaultMessage: 'Are you sure?' })}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={props.onClose} data-testid="confirm-cancel" color="primary">
                        {formatMessage({ id: 'MUIBP.cancel', defaultMessage: 'Cancel' })}
                    </Button>
                    <Button onClick={props.onConfirmed} data-testid="confirm-ok" color="primary" autoFocus>
                        {formatMessage({ id: 'MUIBP.ok', defaultMessage: 'OK' })}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
export default ConfirmDialog;
