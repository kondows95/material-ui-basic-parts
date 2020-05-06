"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_testing_library_wrapper_1 = __importDefault(require("react-testing-library-wrapper"));
const react_intl_1 = require("react-intl");
const SubmitButton_1 = __importDefault(require("../SubmitButton"));
let tLib;
describe('Basic Usage', () => {
    beforeEach(() => {
        tLib = new react_testing_library_wrapper_1.default((react_1.default.createElement(react_intl_1.IntlProvider, { locale: "en", messages: { 'MUIBP.submit': 'MyLabel' } },
            react_1.default.createElement(SubmitButton_1.default, { loading: true, className: "MyClass" }))));
    });
    it('You can disable button and show CircularProgress', () => {
        const elem = tLib.get('submit-button');
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
        tLib = new react_testing_library_wrapper_1.default((react_1.default.createElement(react_intl_1.IntlProvider, { locale: "en" },
            react_1.default.createElement(SubmitButton_1.default, null))));
    });
    it('If Intl messages undefined, default label is Submit', () => {
        expect(tLib.render.container.textContent).toContain('Submit');
    });
    it('If loading undefined, disabled is false', () => {
        const elem = tLib.get('submit-button');
        expect(elem.disabled).toBeFalsy();
        expect(elem.innerHTML).not.toContain('CircularProgress');
    });
    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
