import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import CancelButton from '../lib/CancelButton';

let tLib: TestLib;

describe('Basic Usage', () => {
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en">
                    <CancelButton className="MyClass" data-testid="myId" />
                </IntlProvider>
            )
        );
    });

    it('Label is Cancel', () => {
        expect(tLib.get('myId').textContent).toBe('Cancel');
    });

    it('You can add className', () => {
        expect(tLib.get('myId').getAttribute('class')).toContain('MyClass');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
