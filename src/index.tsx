import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { Breadcrumbs, CancelButton, ConfirmDialog, MyButton, MyPaper, SubmitButton, ToolbarSpacer } from './lib/index';
import { OpenInNew as OpenInNewIcon } from '@material-ui/icons';

const msgs = {
    'MUBP.Breadcrumbs': '#MUBP.Breadcrumbs',
    'MUBP.ConfirmDialog': '#MUBP.ConfirmDialog',
    'MUBP.ConfirmDialogCancel': '#MUBP.ConfirmDialogCancel',
    'MUBP.ConfirmDialogOk': '#MUBP.ConfirmDialogOk',
    'MUBP.SubmitButton': '#MUBP.SubmitButton',
    'MUBP.CancelButton': '#MUBP.CancelButton',
    home: '#home',
    category1: '#category1',
    article1: '#article1',
};

function App(): React.ReactElement {
    const [openDialog, setOpenDialog] = useState(true);
    const handleClose = (): void => {
        setOpenDialog(false);
    };
    return (
        <IntlProvider locale="en" messages={msgs}>
            <ToolbarSpacer />
            <BrowserRouter>
                <Breadcrumbs
                    links={[
                        { intlID: 'home', href: '/' },
                        { intlID: 'category1', href: '/category1' },
                        { intlID: 'article1' },
                    ]}
                />
            </BrowserRouter>
            <CancelButton />
            <SubmitButton loading={openDialog} />
            <MyPaper>MyPaper</MyPaper>
            <MyButton
                icon={<OpenInNewIcon />}
                label="Open Dialog"
                loading={openDialog}
                onClick={(): void => setOpenDialog(true)}
            />
            <ConfirmDialog fullWidth={true} open={openDialog} onConfirmed={handleClose} onClose={handleClose} />
        </IntlProvider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
