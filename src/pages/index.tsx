import React from 'react';
import LinksList from "../components/containers/LinksList/LinksList";
import CreateLinkForm from "../components/containers/CreateLinkForm/CreateLinkForm";

const IndexPage = (): JSX.Element => {
    return (<>
        <CreateLinkForm/>
        <LinksList/>
    </>)
}

export default IndexPage