import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import SubmitButton from '../lib/SubmitButton';

let tLib: TestLib;

describe('Basic Usage', () => {
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en">
                    <SubmitButton loading={true} className="MyClass" data-testid="myId" />
                </IntlProvider>
            )
        );
    });

    it('Label is Submit', () => {
        expect(tLib.get('myId').textContent).toBe('Submit');
    });

    it('You can disable button and show CircularProgress', () => {
        const elem = tLib.get('myId') as HTMLButtonElement;
        expect(elem.disabled).toBeTruthy();
        expect(elem.innerHTML).toContain('CircularProgress');
    });

    it('You can add className', () => {
        expect(tLib.get('myId').getAttribute('class')).toContain('MyClass');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});

it('Check Default Values', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <SubmitButton data-testid="myId" />
            </IntlProvider>
        )
    );
    const elem = tLib.get('myId') as HTMLButtonElement;
    expect(elem.disabled).toBeFalsy();
    expect(elem.innerHTML).not.toContain('CircularProgress');
});
