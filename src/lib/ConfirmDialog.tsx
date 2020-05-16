import React from 'react';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import { useIntl } from 'react-intl';
import MyButton from './MyButton';

const ignoreKeys = ['open', 'onConfirmed', 'onClose'];
interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    open: boolean;
    onConfirmed: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface CopyProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const ConfirmDialog: React.FC<Props> = (props) => {
    const { formatMessage } = useIntl();

    const copyProps: CopyProps = {};
    for (const key of Object.keys(props)) {
        if (ignoreKeys.indexOf(key) === -1) {
            copyProps[key] = props[key];
        }
    }

    const msgId = 'MUBP.ConfirmDialog';
    const msgIdTitle = msgId + 'Title';
    const msgIdCancel = msgId + 'Cancel';
    const msgIdOk = msgId + 'Ok';
    return (
        <Dialog
            {...copyProps}
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            data-testid={msgId}
        >
            <DialogTitle id="alert-dialog-title" data-testid={msgIdTitle}>
                {formatMessage({ id: msgIdTitle, defaultMessage: 'Are you sure?' })}
            </DialogTitle>
            <DialogActions>
                <MyButton
                    label={formatMessage({ id: msgIdCancel, defaultMessage: 'Cancel' })}
                    onClick={props.onClose}
                    data-testid={msgIdCancel}
                />
                <MyButton
                    label={formatMessage({ id: msgIdOk, defaultMessage: 'OK' })}
                    onClick={props.onConfirmed}
                    color="primary"
                    autoFocus
                    data-testid={msgIdOk}
                />
            </DialogActions>
        </Dialog>
    );
};
export default ConfirmDialog;
