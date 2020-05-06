"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_testing_library_wrapper_1 = __importDefault(require("react-testing-library-wrapper"));
const MyPaper_1 = __importDefault(require("../MyPaper"));
describe('Basic Usage', () => {
    let tLib;
    beforeEach(() => {
        tLib = new react_testing_library_wrapper_1.default((react_1.default.createElement(MyPaper_1.default, null,
            react_1.default.createElement("div", null, "MyChiled"))));
    });
    it('You can add chiled component', () => {
        expect(tLib.render.container.textContent).toBe('MyChiled');
    });
    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
