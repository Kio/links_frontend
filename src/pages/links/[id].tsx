import React from 'react';
import {useLink} from "../../apollo/hooks/links";
import {useParams} from "react-router-dom";
import Spin from "../../components/ui/Feedback/Spin/Spin";
import Alert from "../../components/ui/Feedback/Alert/Alert";
import Title from "../../components/ui/General/Title/Title";
import LinkStatus from "../../components/ui/Link/LinkStatus/LinkStatus";
import LinkContainedLinksTable from "../../components/ui/Data Display/LinkContainedLinksTable/LinkContainedLinksTable";
import HomeButton from "../../components/ui/Navigation/HomeButton/HomeButton";

const LinkPage = (): JSX.Element => {
    const { linkId } = useParams();
    const {data, loading, error} = useLink({
        id: parseInt(linkId as string)
    });
    if (loading || !data || !data.link) return <Spin/>
    if (error) return (<Alert>
        Error while loading link: {error.message}
    </Alert>)
    return (<>
        <HomeButton/>
        <Title
            level={1}
        >
            <LinkStatus status={data.link.status}/>
            {data.link.url}
        </Title>
        {data.link.status === "RUNNING" ?
            <Spin/>
        :
            <LinkContainedLinksTable links={data.link.containedLinks ?? []}/>
        }
    </>)
}

export default LinkPage