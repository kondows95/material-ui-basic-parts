import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from '../lib/Breadcrumbs';

let tLib: TestLib;

const links = [{ intlID: 'home', href: '/' }, { intlID: 'category1', href: '/category1' }, { intlID: 'article1' }];

describe('Basic Usage', () => {
    beforeEach(() => {
        const langMessages = { home: 'HOME', category1: 'CATEGORY1', article1: 'ARTICLE1' };
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={langMessages}>
                    <BrowserRouter>
                        <Breadcrumbs links={links} />
                    </BrowserRouter>
                </IntlProvider>
            )
        );
    });

    it('You can set TOP page link and label', () => {
        tLib.click('MUBP.Breadcrumbs0');
        expect(location.pathname).toBe('/');
        const elem = tLib.get('MUBP.Breadcrumbs0');
        expect(elem.textContent).toBe('HOME');
        expect(elem.tagName).toBe('A');
    });

    it('You can set PARENT page link and label', () => {
        tLib.click('MUBP.Breadcrumbs1');
        expect(location.pathname).toBe('/category1');
        const elem = tLib.get('MUBP.Breadcrumbs1');
        expect(elem.textContent).toBe('CATEGORY1');
        expect(elem.tagName).toBe('A');
    });

    it('Current page is not link', () => {
        const elem = tLib.get('MUBP.Breadcrumbs2');
        expect(elem.textContent).toBe('ARTICLE1');
        expect(elem.tagName).toBe('DIV');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
