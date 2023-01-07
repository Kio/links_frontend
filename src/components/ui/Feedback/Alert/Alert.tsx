import React, {memo} from 'react';
import styles from './Alert.module.scss';

type AlertProps = {
    children: React.ReactNode
}

const Alert = (props: AlertProps): JSX.Element => {
    const {children} = props
    return (<div className={styles.container}>
        {children}
    </div>)
}

export default memo(Alert)