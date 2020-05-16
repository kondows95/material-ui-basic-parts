import React from 'react';
interface Props {
    [key: string]: any;
    open: boolean;
    onConfirmed: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const ConfirmDialog: React.FC<Props>;
export default ConfirmDialog;
