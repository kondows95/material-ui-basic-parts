import { Theme } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getButtonLoadingStyle = (): any => {
    return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -9,
        marginLeft: -12,
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRightButtonStyle = (theme: Theme): any => {
    return {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 0, 1), //TXB
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 0, 1, 1), //TRBL
        },
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getLeftButtonStyle = (theme: Theme): any => {
    return {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 0, 1), //TXB
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 0, 1, 1), //TRBL
        },
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getConfirmDialogStyle = (theme: Theme): any => {
    return {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 0, 1), //TXL
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 0, 1, 1), //TRBL
        },
    };
};
