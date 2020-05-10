"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.getButtonLoadingStyle = () => {
    return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -9,
        marginLeft: -12,
    };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.getRightButtonStyle = (theme) => {
    return {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 0, 1),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 0, 1, 1),
        },
    };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.getLeftButtonStyle = (theme) => {
    return {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 0, 1),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 0, 1, 1),
        },
    };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.getConfirmDialogStyle = (theme) => {
    return {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 0, 1),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 0, 1, 1),
        },
    };
};
