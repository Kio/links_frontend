import React from "react";
import styles from "./LinkContainedLinksTable.module.scss";
import { FixedSizeList as List } from "react-window";

type LinkContainedLinksTableProps = {
    links: string[]
}

const LinkContainedLinksTable = (props: LinkContainedLinksTableProps): JSX.Element => {
    const { links } = props;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const renderRow = ({ index, key, style }) => (
        <div
            key={key}
            style={style}
            className={styles.item}
        >
            {index+1}
            <a target="_blank" href={links[index]} rel="noreferrer">
                {links[index]}
            </a>
        </div>
    )
    if (links.length === 0) return <></>
    return (
        <List
            width={window.innerWidth - 72}
            height={window.innerHeight - 200}
            itemCount={links.length}
            itemSize={40}
            className={styles.container}
        >
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {renderRow}
        </List>
    )
}

export default LinkContainedLinksTable