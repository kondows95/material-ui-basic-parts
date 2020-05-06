import React, { PropsWithChildren } from 'react';
interface Props {
    open: boolean;
    onConfirmed: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const ConfirmDialog: React.FC<PropsWithChildren<Props>>;
export default ConfirmDialog;
