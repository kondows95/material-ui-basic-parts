import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import ConfirmDialog from '../ConfirmDialog';

let tLib: TestLib;
let open = true;
let handleConfirmed: jest.Mock;
let handleClose: jest.Mock;

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
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={langMessages}>
                    <ConfirmDialog open={open} onConfirmed={handleConfirmed} onClose={handleClose} />
                </IntlProvider>
            )
        );
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
        tLib = new TestLib(
            (
                <IntlProvider locale="en">
                    <ConfirmDialog open={open} onConfirmed={handleConfirmed} onClose={handleClose} />
                </IntlProvider>
            )
        );
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
