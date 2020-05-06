import React from 'react';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

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
        tLib.click('breadcrumb0');
        expect(location.pathname).toBe('/');
        const elem = tLib.get('breadcrumb0');
        expect(elem.textContent).toBe('HOME');
        expect(elem.tagName).toBe('A');
    });

    it('You can set PARENT page link and label', () => {
        tLib.click('breadcrumb1');
        expect(location.pathname).toBe('/category1');
        const elem = tLib.get('breadcrumb1');
        expect(elem.textContent).toBe('CATEGORY1');
        expect(elem.tagName).toBe('A');
    });

    it('Current page is not link', () => {
        const elem = tLib.get('breadcrumb2');
        expect(elem.textContent).toBe('ARTICLE1');
        expect(elem.tagName).toBe('DIV');
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
                    <BrowserRouter>
                        <Breadcrumbs links={links} />
                    </BrowserRouter>
                </IntlProvider>
            )
        );
    });

    it('If Intl messages undefined, label be intlID', () => {
        expect(tLib.get('breadcrumb0').textContent).toBe('home');
        expect(tLib.get('breadcrumb1').textContent).toBe('category1');
        expect(tLib.get('breadcrumb2').textContent).toBe('article1');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
