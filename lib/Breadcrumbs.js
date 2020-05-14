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
import React from 'react';
import { Box, Link, Breadcrumbs } from '@material-ui/core';
import { NavigateNext as NavigateNextIcon } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import { useIntl } from 'react-intl';
var MyBreadcrumbs = function (props) {
    var formatMessage = useIntl().formatMessage;
    var fontSize = props.fontSize || 14;
    var handleClick = function (href) { return function (event) {
        event.preventDefault();
        props.history.push(href);
    }; };
    var MyBox = function (props) { return (React.createElement(Box, __assign({ fontSize: fontSize }, props), props.children)); };
    return (React.createElement(Box, { m: 2 },
        React.createElement(Breadcrumbs, { separator: React.createElement(NavigateNextIcon, { fontSize: "small" }), "aria-label": "breadcrumb" }, props.links.map(function (obj, idx) {
            var label = formatMessage({ id: obj.intlID, defaultMessage: obj.intlID });
            if (obj.href) {
                return (React.createElement(Link, { "data-testid": 'breadcrumb' + idx, key: idx, color: "inherit", onClick: handleClick(obj.href) },
                    React.createElement(MyBox, null, label)));
            }
            else {
                return (React.createElement(MyBox, { "data-testid": 'breadcrumb' + idx, key: idx, color: "text.primary" }, label));
            }
        }))));
};
export default withRouter(MyBreadcrumbs);
