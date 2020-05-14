import React from 'react';
import { Box, Link, Breadcrumbs, BoxProps } from '@material-ui/core';
import { NavigateNext as NavigateNextIcon } from '@material-ui/icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useIntl } from 'react-intl';

export type Link = {
    intlID: string;
    href?: string;
};

type Props = {
    links: Link[];
    fontSize?: number | string;
} & RouteComponentProps;

const MyBreadcrumbs: React.FC<Props> = (props) => {
    const { formatMessage } = useIntl();

    const fontSize = props.fontSize || 14;

    const handleClick = (href: string) => (event: React.MouseEvent): void => {
        event.preventDefault();
        props.history.push(href);
    };

    const MyBox = (props: BoxProps): React.ReactElement => (
        <Box fontSize={fontSize} {...props}>
            {props.children}
        </Box>
    );

    return (
        <Box m={2}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                {props.links.map((obj, idx) => {
                    const label = formatMessage({ id: obj.intlID, defaultMessage: obj.intlID });
                    if (obj.href) {
                        return (
                            <Link
                                data-testid={'breadcrumb' + idx}
                                key={idx}
                                color="inherit"
                                onClick={handleClick(obj.href)}
                            >
                                <MyBox>{label}</MyBox>
                            </Link>
                        );
                    } else {
                        return (
                            <MyBox data-testid={'breadcrumb' + idx} key={idx} color="text.primary">
                                {label}
                            </MyBox>
                        );
                    }
                })}
            </Breadcrumbs>
        </Box>
    );
};

export default withRouter(MyBreadcrumbs);
