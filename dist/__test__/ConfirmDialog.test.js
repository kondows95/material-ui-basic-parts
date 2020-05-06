"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_testing_library_wrapper_1 = __importDefault(require("react-testing-library-wrapper"));
const react_intl_1 = require("react-intl");
const ConfirmDialog_1 = __importDefault(require("../ConfirmDialog"));
let tLib;
let open = true;
let handleConfirmed;
let handleClose;
beforeEach(() => {
    open = true;
    handleConfirmed = jest.fn(() => {
        open = false;
    });
    handleClose = jest.fn(() => {
        open = false;
    });
});
describe('Basic Usage', () => {
    const langMessages = {
        'MUIBP.ok': 'MyOK',
        'MUIBP.cancel': 'MyCancel',
        'MUIBP.confirmDialogMessage': 'You can set message!',
    };
    beforeEach(() => {
        tLib = new react_testing_library_wrapper_1.default((react_1.default.createElement(react_intl_1.IntlProvider, { locale: "en", messages: langMessages },
            react_1.default.createElement(ConfirmDialog_1.default, { open: open, onConfirmed: handleConfirmed, onClose: handleClose }))));
    });
    it('You can handle onClose', () => {
        tLib.click('confirm-cancel');
        expect(handleClose).toHaveBeenCalled();
        expect(open).toBeFalsy();
    });
    it('You can handle onConfirmed', () => {
        tLib.click('confirm-ok');
        expect(handleConfirmed).toHaveBeenCalled();
        expect(open).toBeFalsy();
    });
    it('You can set lables by Intl', () => {
        expect(tLib.get('confirm-ok').textContent).toBe('MyOK');
        expect(tLib.get('confirm-cancel').textContent).toBe('MyCancel');
        expect(tLib.get('alert-dialog-title').textContent).toBe('You can set message!');
    });
});
describe('Expansion Usage 1', () => {
    beforeEach(() => {
        tLib = new react_testing_library_wrapper_1.default((react_1.default.createElement(react_intl_1.IntlProvider, { locale: "en" },
            react_1.default.createElement(ConfirmDialog_1.default, { open: open, onConfirmed: handleConfirmed, onClose: handleClose }))));
    });
    it('If Intl messages undefined', () => {
        expect(tLib.get('confirm-ok').textContent).toBe('OK');
        expect(tLib.get('confirm-cancel').textContent).toBe('Cancel');
        expect(tLib.get('alert-dialog-title').textContent).toBe('Are you sure?');
    });
    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
