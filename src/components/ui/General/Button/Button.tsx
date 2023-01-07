import React, {forwardRef, ForwardRefRenderFunction} from "react";
import styles from "./Button.module.scss"

type ButtonProps = {
    children: React.ReactNode
    icon?: React.ReactNode
    onClick?: () => void
    loading?: boolean
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
    const { children, icon, loading=false, ...other_props } = props
    return (
        <button
            ref={ref}
            className={styles.button}
            {...other_props}
            disabled={loading}
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