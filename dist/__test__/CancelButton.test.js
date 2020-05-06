"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_testing_library_wrapper_1 = __importDefault(require("react-testing-library-wrapper"));
const react_intl_1 = require("react-intl");
const CancelButton_1 = __importDefault(require("../CancelButton"));
let tLib;
let onClick;
beforeEach(() => {
    onClick = jest.fn();
});
describe('Basic Usage', () => {
    beforeEach(() => {
        tLib = new react_testing_library_wrapper_1.default((react_1.default.createElement(react_intl_1.IntlProvider, { locale: "en", messages: { 'MUIBP.cancel': 'MyLabel' } },
            react_1.default.createElement(CancelButton_1.default, { onClick: onClick, className: "MyClass" }))));
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
describe('Expansion Usage', () => {
    beforeEach(() => {
        tLib = new react_testing_library_wrapper_1.default((react_1.default.createElement(react_intl_1.IntlProvider, { locale: "en" },
            react_1.default.createElement(CancelButton_1.default, { onClick: onClick }))));
    });
    it('If Intl messages undefined, default label is Cancel', () => {
        expect(tLib.render.container.textContent).toContain('Cancel');
    });
    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
