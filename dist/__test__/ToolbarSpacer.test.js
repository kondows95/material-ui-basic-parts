"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_testing_library_wrapper_1 = __importDefault(require("react-testing-library-wrapper"));
const ToolbarSpacer_1 = __importDefault(require("../ToolbarSpacer"));
describe('Basic Usage', () => {
    let tLib;
    beforeEach(() => {
        tLib = new react_testing_library_wrapper_1.default(react_1.default.createElement(ToolbarSpacer_1.default, null));
    });
    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
