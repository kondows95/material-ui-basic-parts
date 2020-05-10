import React from 'react';
import { Box, Dialog, DialogActions, DialogTitle, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import { getButtonLoadingStyle, getConfirmDialogStyle } from './styles';
import MyButton from './MyButton';

const useStyles = makeStyles((theme: Theme) => ({
    progress: getButtonLoadingStyle(),
    dialog: getConfirmDialogStyle(theme),
}));

interface Props {
    open: boolean;
    onConfirmed: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ConfirmDialog: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    return (
        <Box className={classes.dialog}>
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
                    <MyButton
                        label={formatMessage({ id: 'MUIBP.cancel', defaultMessage: 'Cancel' })}
                        onClick={props.onClose}
                        data-testid="confirm-cancel"
                        color="primary"
                    />
                    <MyButton
                        label={formatMessage({ id: 'MUIBP.ok', defaultMessage: 'OK' })}
                        onClick={props.onConfirmed}
                        data-testid="confirm-ok"
                        color="primary"
                        autoFocus
                    />
                </DialogActions>
            </Dialog>
        </Box>
    );
};
export default ConfirmDialog;
