import React, {memo} from "react";
import styles from "./Title.module.scss"

type TitleProps = {
    children: React.ReactNode
    level: 1 | 2
}

const Title = (props: TitleProps): JSX.Element => {
    const {children, level} = props
    return React.createElement(
        "div",
        { className: styles.container},
            React.createElement(
                `h${level}`,
                { className: styles.title},
                children
            )
        );
}

export default memo(Title)