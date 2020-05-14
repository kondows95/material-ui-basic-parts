// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var getButtonLoadingStyle = function () {
    return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -9,
        marginLeft: -12,
    };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var getRightButtonStyle = function (theme) {
    var _a;
    return _a = {},
        _a[theme.breakpoints.down('xs')] = {
            padding: theme.spacing(1, 0, 1),
        },
        _a[theme.breakpoints.up('sm')] = {
            padding: theme.spacing(2, 0, 1, 1),
        },
        _a;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var getLeftButtonStyle = function (theme) {
    var _a;
    return _a = {},
        _a[theme.breakpoints.down('xs')] = {
            padding: theme.spacing(1, 0, 1),
        },
        _a[theme.breakpoints.up('sm')] = {
            padding: theme.spacing(2, 0, 1, 1),
        },
        _a;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var getConfirmDialogStyle = function (theme) {
    var _a;
    return _a = {},
        _a[theme.breakpoints.down('xs')] = {
            padding: theme.spacing(1, 0, 1),
        },
        _a[theme.breakpoints.up('sm')] = {
            padding: theme.spacing(2, 0, 1, 1),
        },
        _a;
};
