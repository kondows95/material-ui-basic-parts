"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const react_router_dom_1 = require("react-router-dom");
const react_intl_1 = require("react-intl");
const MyBreadcrumbs = (props) => {
    const { formatMessage } = react_intl_1.useIntl();
    const fontSize = props.fontSize || 14;
    const handleClick = (href) => (event) => {
        event.preventDefault();
        props.history.push(href);
    };
    const MyBox = (props) => (react_1.default.createElement(core_1.Box, Object.assign({ fontSize: fontSize }, props), props.children));
    return (react_1.default.createElement(core_1.Box, { m: 2 },
        react_1.default.createElement(core_1.Breadcrumbs, { separator: react_1.default.createElement(icons_1.NavigateNext, { fontSize: "small" }), "aria-label": "breadcrumb" }, props.links.map((obj, idx) => {
            const label = formatMessage({ id: obj.intlID, defaultMessage: obj.intlID });
            if (obj.href) {
                return (react_1.default.createElement(core_1.Link, { "data-testid": 'breadcrumb' + idx, key: idx, color: "inherit", onClick: handleClick(obj.href) },
                    react_1.default.createElement(MyBox, null, label)));
            }
            else {
                return (react_1.default.createElement(MyBox, { "data-testid": 'breadcrumb' + idx, key: idx, color: "text.primary" }, label));
            }
        }))));
};
exports.default = react_router_dom_1.withRouter(MyBreadcrumbs);
