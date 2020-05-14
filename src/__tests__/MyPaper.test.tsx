import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import MyPaper from '../lib/MyPaper';

describe('Basic Usage', () => {
    let tLib: TestLib;
    beforeEach(() => {
        tLib = new TestLib(
            (
                <MyPaper>
                    <div>MyChild</div>
                </MyPaper>
            )
        );
    });

    it('You can add chiled component', () => {
        expect(tLib.render.container.textContent).toBe('MyChiled');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
