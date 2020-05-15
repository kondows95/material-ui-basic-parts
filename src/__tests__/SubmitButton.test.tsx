import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import SubmitButton from '../lib/SubmitButton';

let tLib: TestLib;

describe('Basic Usage', () => {
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={{ 'MUIBP.submit': 'MySubmit' }}>
                    <SubmitButton loading={true} className="MyClass" />
                </IntlProvider>
            )
        );
    });

    it('You can disable button and show CircularProgress', () => {
        const elem = tLib.get('submit-button') as HTMLButtonElement;
        expect(elem.disabled).toBeTruthy();
        expect(elem.innerHTML).toContain('CircularProgress');
    });

    it('You can set submit label by Intl', () => {
        expect(tLib.get('submit-button').textContent).toBe('MySubmit');
    });

    it('You can add className', () => {
        expect(tLib.get('submit-button').getAttribute('class')).toContain('MyClass');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});

describe('Check Default Values', () => {
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en">
                    <SubmitButton />
                </IntlProvider>
            )
        );
    });

    it('Default label is Submit', () => {
        expect(tLib.get('submit-button').textContent).toContain('Submit');
    });

    it('Button is enable', () => {
        const elem = tLib.get('submit-button') as HTMLButtonElement;
        expect(elem.disabled).toBeFalsy();
        expect(elem.innerHTML).not.toContain('CircularProgress');
    });
});

it('You can set label', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <SubmitButton label="MyLabel" />
            </IntlProvider>
        )
    );
    expect(tLib.get('submit-button').textContent).toContain('MyLabel');
});
