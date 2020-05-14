import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { Breadcrumbs, CancelButton, ConfirmDialog, MyButton, MyPaper, SubmitButton, ToolbarSpacer } from './lib/index';
import { OpenInNew as OpenInNewIcon } from '@material-ui/icons';

const msgs = {
    'MUIBP.ok': 'MyOK',
    'MUIBP.cancel': 'MyCancel',
    'MUIBP.confirmDialogMessage': 'You can set message!',
};

function App(): React.ReactElement {
    const [openDialog, setOpenDialog] = useState(false);
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
            <ConfirmDialog open={openDialog} onConfirmed={handleClose} onClose={handleClose} />
        </IntlProvider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
