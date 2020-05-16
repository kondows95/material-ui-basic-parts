import React from 'react';
import { useIntl } from 'react-intl';
import MyButton from './MyButton';

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    loading?: boolean;
}

interface CopyProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const SubmitButton: React.FC<Props> = (props) => {
    const { formatMessage } = useIntl();

    const copyProps: CopyProps = {};
    for (const key of Object.keys(props)) {
        if (key !== 'loading') {
            copyProps[key] = props[key];
        }
    }

    const msgId = 'MUBP.SubmitButton';
    return (
        <MyButton
            {...copyProps}
            label={formatMessage({ id: msgId, defaultMessage: 'Submit' })}
            loading={props.loading ? true : false}
            type="submit"
            color="primary"
            fullWidth
        />
    );
};
export default SubmitButton;
