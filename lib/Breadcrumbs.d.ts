import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
export declare type Link = {
    intlID: string;
    href?: string;
};
declare type Props = {
    links: Link[];
    fontSize?: number | string;
} & RouteComponentProps;
declare const _default: React.ComponentClass<Pick<Props, "fontSize" | "links">, any> & import("react-router").WithRouterStatics<React.FC<Props>>;
export default _default;
