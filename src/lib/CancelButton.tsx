import React from 'react';
import { useIntl } from 'react-intl';
import MyButton from './MyButton';

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const CancelButton: React.FC<Props> = (props) => {
    const { formatMessage } = useIntl();
    const msgId = 'MUBP.CancelButton';
    return <MyButton {...props} label={formatMessage({ id: msgId, defaultMessage: 'Cancel' })} fullWidth />;
};
export default CancelButton;
