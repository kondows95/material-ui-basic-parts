import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import MyButton from '../lib/MyButton';
import { OpenInNew as OpenInNewIcon } from '@material-ui/icons';

let tLib: TestLib;

describe('Basic Usage', () => {
    beforeEach(() => {
        tLib = new TestLib(
            <MyButton label="MyLabel" icon={<OpenInNewIcon />} loading={true} className="myClass" data-testid="myId" />
        );
    });

    it('You can add data-testid', () => {
        tLib.get('myId');
    });

    it('You can disable button and show CircularProgress', () => {
        const elem = tLib.get('myId') as HTMLButtonElement;
        expect(elem.disabled).toBeTruthy();
        expect(elem.innerHTML).toContain('CircularProgress');
    });

    it('You can set icon', () => {
        expect(tLib.get('myId').innerHTML).toContain('MuiSvgIcon');
    });

    it('You can add className', () => {
        expect(tLib.get('myId').getAttribute('class')).toContain('myClass');
    });

    it('You can set button label', () => {
        expect(tLib.render.container.textContent).toBe('MyLabel');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});

describe('Expansion Usage', () => {
    beforeEach(() => {
        tLib = new TestLib(<MyButton label="MyLabel" data-testid="myId" />);
    });

    it('The Button is enable by default', () => {
        const elem = tLib.get('myId') as HTMLButtonElement;
        expect(elem.disabled).toBeFalsy();
        expect(elem.innerHTML).not.toContain('CircularProgress');
    });

    it('Icon is optional', () => {
        expect(tLib.get('myId').innerHTML).not.toContain('MuiSvgIcon');
    });
});
