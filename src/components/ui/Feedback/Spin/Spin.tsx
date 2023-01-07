import React from 'react';
import styles from "./Spin.module.scss";

import {ReactComponent as Icon} from "./SpinIcon.svg";

const Spin = (): JSX.Element => {
    return (<div className={styles.container}>
        <div className={styles.spin}>
            <Icon/>
        </div>
    </div>)
}

export default Spin