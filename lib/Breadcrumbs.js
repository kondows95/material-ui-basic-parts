"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var react_router_dom_1 = require("react-router-dom");
var react_intl_1 = require("react-intl");
var MyBreadcrumbs = function (props) {
    var formatMessage = react_intl_1.useIntl().formatMessage;
    var fontSize = props.fontSize || 14;
    var handleClick = function (href) { return function (event) {
        event.preventDefault();
        props.history.push(href);
    }; };
    var MyBox = function (props) { return (react_1.default.createElement(core_1.Box, __assign({ fontSize: fontSize }, props), props.children)); };
    return (react_1.default.createElement(core_1.Box, { m: 2 },
        react_1.default.createElement(core_1.Breadcrumbs, { separator: react_1.default.createElement(icons_1.NavigateNext, { fontSize: "small" }), "aria-label": "breadcrumb" }, props.links.map(function (obj, idx) {
            var label = formatMessage({ id: obj.intlID, defaultMessage: obj.intlID });
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
