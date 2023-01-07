import React, {memo} from "react";
import {Link} from "react-router-dom";

import Button from "../../General/Button/Button";

import {ReactComponent as Icon} from "./HomeButtonIcon.svg";
import styles from "./HomeButton.module.scss"

const HomeButton = (): JSX.Element => {
    return (
        <Link to="/" className={styles.container}>
            <Button
                icon={<Icon/>}
            >
                Home
            </Button>
        </Link>
    )
}

export default memo(HomeButton)