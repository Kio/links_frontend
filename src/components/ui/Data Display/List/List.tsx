import React, {memo} from 'react';
import styles from './List.module.scss';

type DataType = {
    id: number
}

type ListProps = {
    data: DataType[]
    renderItem: (item: any) => React.ReactNode
}

const Alert = (props: ListProps): JSX.Element => {
    const { data, renderItem } = props
    return (<ul className={styles.container}>
        {data.map((item) =>
            <li
                className={styles.item}
                key={item.id}
            >
                {renderItem(item)}
            </li>
        )}
    </ul>)
}

export default memo(Alert)