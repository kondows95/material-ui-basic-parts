import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import MyPaper from '../lib/MyPaper';

describe('Basic Usage', () => {
    let tLib: TestLib;
    beforeEach(() => {
        tLib = new TestLib(
            (
                <MyPaper data-testid="myId">
                    <div>MyChild</div>
                </MyPaper>
            )
        );
    });

    it('You can add data-testid', () => {
        tLib.get('myId');
    });

    it('You can add child component', () => {
        expect(tLib.render.container.textContent).toBe('MyChild');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
