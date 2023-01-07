import React, {forwardRef, ForwardRefRenderFunction} from "react";
import styles from "./Button.module.scss"

type ButtonProps = {
    children: React.ReactNode
    icon: React.ReactNode
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
    const { children, icon, ...other_props } = props
    return (
        <button
            ref={ref}
            {...other_props}
            className={styles.button}
        >
            {icon &&
                <span className={styles.icon}>
                    {icon}
                </span>
            }
            {children}
        </button>
    );
}

export default forwardRef(Button)