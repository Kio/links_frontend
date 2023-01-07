import React from 'react';
import {useLinks} from "../../../apollo/hooks/links";
import Spin from "../../ui/Feedback/Spin/Spin";
import Alert from "../../ui/Feedback/Alert/Alert";
import List from "../../ui/Data Display/List/List";
import LinkRow from "../../ui/Link/LinkRow/LinkRow";
import Title from "../../ui/General/Title/Title";

const LinksList = (): JSX.Element => {
    const {data, loading, error} = useLinks()
    if (loading || !data || !data.links) return <Spin/>
    if (error) return (<Alert>
        Error while loading links: {error.message}
    </Alert>)
    return (<>
        {data.links.length > 0 ?
            <>
                <Title
                    level={2}
                >
                    History of links
                </Title>
                <List
                    data={data.links}
                    renderItem={LinkRow}
                />
            </>
        :
            <p>
                All your requests will be saved here.
            </p>
        }
    </>)
}

export default LinksList

