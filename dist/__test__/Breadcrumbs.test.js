"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_testing_library_wrapper_1 = __importDefault(require("react-testing-library-wrapper"));
const react_intl_1 = require("react-intl");
const react_router_dom_1 = require("react-router-dom");
const Breadcrumbs_1 = __importDefault(require("../Breadcrumbs"));
let tLib;
const links = [{ intlID: 'home', href: '/' }, { intlID: 'category1', href: '/category1' }, { intlID: 'article1' }];
describe('Basic Usage', () => {
    beforeEach(() => {
        const langMessages = { home: 'HOME', category1: 'CATEGORY1', article1: 'ARTICLE1' };
        tLib = new react_testing_library_wrapper_1.default((react_1.default.createElement(react_intl_1.IntlProvider, { locale: "en", messages: langMessages },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(Breadcrumbs_1.default, { links: links })))));
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
        tLib = new react_testing_library_wrapper_1.default((react_1.default.createElement(react_intl_1.IntlProvider, { locale: "en" },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(Breadcrumbs_1.default, { links: links })))));
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
