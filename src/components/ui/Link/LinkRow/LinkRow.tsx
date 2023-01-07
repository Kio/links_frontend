import React, {useCallback} from "react";
import {LinkType} from "../../../../apollo/hooks/links";
import {Link} from "react-router-dom";
import styles from "./LinkRow.module.scss"
import LinkStatus from "../LinkStatus/LinkStatus";


const formatDateTime = (datetime: string): string => {
    const date = new Date(datetime)
    return `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`
}

const LinkRow = (item: LinkType): JSX.Element => {
    return (<div className={styles.container}>
        <LinkStatus status={item.status}/>
        <Link
            to={`/links/${item.id}`}
        >
            {item.url}
        </Link>
        <time
            className={styles.datetime}
            dateTime={item.created}
        >
            {formatDateTime(item.created)}
        </time>
    </div>)
}

export default LinkRow