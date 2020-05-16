import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import ConfirmDialog from '../lib/ConfirmDialog';

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
        'MUBP.ConfirmDialogOk': '#MUBP.ConfirmDialogOk',
        'MUBP.ConfirmDialogCancel': '#MUBP.ConfirmDialogCancel',
        'MUBP.ConfirmDialogTitle': '#MUBP.ConfirmDialogTitle',
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
        tLib.click('MUBP.ConfirmDialogCancel');
        expect(handleClose).toHaveBeenCalled();
        expect(open).toBeFalsy();
    });

    it('You can handle onConfirmed', () => {
        tLib.click('MUBP.ConfirmDialogOk');
        expect(handleConfirmed).toHaveBeenCalled();
        expect(open).toBeFalsy();
    });

    it('You can set lables by Intl', () => {
        expect(tLib.get('MUBP.ConfirmDialogOk').textContent).toBe('#MUBP.ConfirmDialogOk');
        expect(tLib.get('MUBP.ConfirmDialogCancel').textContent).toBe('#MUBP.ConfirmDialogCancel');
        expect(tLib.get('MUBP.ConfirmDialogTitle').textContent).toBe('#MUBP.ConfirmDialogTitle');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});

it('Default Intl Messages', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <ConfirmDialog open={true} onConfirmed={handleConfirmed} onClose={handleClose} />
            </IntlProvider>
        )
    );
    expect(tLib.get('MUBP.ConfirmDialogOk').textContent).toBe('OK');
    expect(tLib.get('MUBP.ConfirmDialogCancel').textContent).toBe('Cancel');
    expect(tLib.get('MUBP.ConfirmDialogTitle').textContent).toBe('Are you sure?');
});

it('You can set dialog size', () => {
    //See official documents for Material-UI <Dialog> for details.
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <ConfirmDialog
                    open={true}
                    onConfirmed={handleConfirmed}
                    onClose={handleClose}
                    fullWidth={true}
                    maxWidth="xs"
                />
            </IntlProvider>
        )
    );
});
