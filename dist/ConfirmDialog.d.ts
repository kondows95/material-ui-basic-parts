import React from 'react';
interface Props {
    open: boolean;
    onConfirmed: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const ConfirmDialog: React.FC<Props>;
export default ConfirmDialog;
