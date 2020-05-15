import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import CancelButton from '../lib/CancelButton';

let tLib: TestLib;
let onClick: jest.Mock;

beforeEach(() => {
    onClick = jest.fn();
});

describe('Basic Usage', () => {
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={{ 'MUIBP.cancel': 'MyLabel' }}>
                    <CancelButton onClick={onClick} className="MyClass" />
                </IntlProvider>
            )
        );
    });

    it('You can set button label by Intl', () => {
        expect(tLib.render.container.textContent).toBe('MyLabel');
    });

    it('You can add onClick event', () => {
        tLib.click('cancel-button');
        expect(onClick).toHaveBeenCalled();
    });

    it('You can add className', () => {
        expect(tLib.get('cancel-button').getAttribute('class')).toContain('MyClass');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});

it('Default label is Cancel', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <CancelButton onClick={onClick} />
            </IntlProvider>
        )
    );
    expect(tLib.render.container.textContent).toContain('Cancel');
});

it('You can set label', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <CancelButton label="MyLabel" onClick={onClick} />
            </IntlProvider>
        )
    );
    expect(tLib.render.container.textContent).toContain('MyLabel');
});
