import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { Breadcrumbs, ConfirmDialog, MyButton, MyPaper, ToolbarSpacer } from './lib/index';
import { OpenInNew as OpenInNewIcon } from '@material-ui/icons';

const msgs = {
    'MUBP.Breadcrumbs': '#MUBP.Breadcrumbs',
    'MUBP.ConfirmDialog': '#MUBP.ConfirmDialog',
    'MUBP.ConfirmDialogCancel': '#MUBP.ConfirmDialogCancel',
    'MUBP.ConfirmDialogOk': '#MUBP.ConfirmDialogOk',
    home: '#home',
    category1: '#category1',
    article1: '#article1',
};

function App(): React.ReactElement {
    const [openDialog, setOpenDialog] = useState(false);
    const handleClose = (): void => {
        setOpenDialog(false);
    };
    return (
        <IntlProvider locale="en" messages={msgs}>
            <ToolbarSpacer />
            <hr />
            <BrowserRouter>
                <Breadcrumbs
                    links={[
                        { intlID: 'home', href: '/' },
                        { intlID: 'category1', href: '/category1' },
                        { intlID: 'article1' },
                    ]}
                />
            </BrowserRouter>
            <hr />
            <MyPaper>MyPaper</MyPaper>
            <hr />
            <MyButton
                icon={<OpenInNewIcon />}
                label="MyButton"
                loading={openDialog}
                onClick={(): void => console.log('onClickMyButton')}
            />
            <hr />
            <ConfirmDialog fullWidth={true} open={openDialog} onConfirmed={handleClose} onClose={handleClose} />
            <button onClick={(): void => setOpenDialog(true)} style={{ padding: '8px' }}>
                Open Dialog
            </button>

            <hr />
        </IntlProvider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
