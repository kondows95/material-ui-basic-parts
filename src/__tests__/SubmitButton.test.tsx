import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import SubmitButton from '../lib/SubmitButton';

let tLib: TestLib;

describe('Basic Usage', () => {
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={{ 'MUIBP.submit': 'MyLabel' }}>
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

    it('You can set button label by Intl', () => {
        expect(tLib.render.container.textContent).toBe('MyLabel');
    });

    it('You can add className', () => {
        expect(tLib.get('submit-button').getAttribute('class')).toContain('MyClass');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});

describe('Expansion Usage', () => {
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en">
                    <SubmitButton />
                </IntlProvider>
            )
        );
    });

    it('If Intl messages undefined, default label is Submit', () => {
        expect(tLib.render.container.textContent).toContain('Submit');
    });

    it('If loading undefined, disabled is false', () => {
        const elem = tLib.get('submit-button') as HTMLButtonElement;
        expect(elem.disabled).toBeFalsy();
        expect(elem.innerHTML).not.toContain('CircularProgress');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
