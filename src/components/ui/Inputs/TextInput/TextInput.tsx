import React, {useCallback} from 'react';
import styles from "./TextInput.module.scss";

type TextInputProps = {
    label: string
    placeholder?: string
    value: string
    onChange: (value: string) => void
    required?: boolean
}

const TextInput = (props: TextInputProps): JSX.Element => {
    const { label, value, onChange, placeholder, required=false } = props
    const onInputValueChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }, [onChange])
    return (<>
        <label className={styles.label}>
            {label}
        </label>
        <input
            required={required}
            className={styles.input}
            type="text"
            value={value}
            onChange={onInputValueChange}
            placeholder={placeholder}
        />
    </>)
}

export default TextInput