import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import ToolbarSpacer from '../lib/ToolbarSpacer';

describe('Basic Usage', () => {
    let tLib: TestLib;
    beforeEach(() => {
        tLib = new TestLib(<ToolbarSpacer />);
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
