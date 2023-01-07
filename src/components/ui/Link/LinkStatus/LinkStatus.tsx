import React, {useMemo} from "react";
import styles from "./LinkStatus.module.scss"

const StatusTypes = ['SUCCESS', 'RUNNING', 'FAILURE'] as const;
export type StatusType = typeof StatusTypes[number];
const Status2Class = {
    'SUCCESS': styles.success,
    'RUNNING': styles.running,
    'FAILURE': styles.failure,
    'NOT_EXISTED': styles.not_existed,
}

type LinkStatusProps = {
    status: StatusType
}

const LinkStatus = (props: LinkStatusProps): JSX.Element => {
    const { status } = props
    const classes = useMemo((): string => {
        return [styles.status, Status2Class[status]].join(" ")
    }, [status])
    return (<div className={classes}/>)
}

export default LinkStatus