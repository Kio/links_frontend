import {useLazyQuery, gql, ApolloError} from '@apollo/client';
import {useEffect} from "react";
import {StatusType} from "../../components/ui/Link/LinkStatus/LinkStatus";

export type LinkType = {
    id: number,
    url: string,
    status: StatusType,
    created: string,
    containedLinks?: string[],
}

const QUERY_LINKS = gql`
    query links {
        links {
            id
            url
            status
            created
        }
    }
`;

type UseLinksReturnType = {
    data: {links: LinkType[]},
    loading: boolean,
    error: ApolloError | undefined,
}

export const useLinks = (): UseLinksReturnType => {
    const [loadLinks, {data, loading, error}] = useLazyQuery(QUERY_LINKS)

    useEffect(() => {
        loadLinks()
    }, [loadLinks])
    
    return {data, loading, error}
}

const QUERY_LINK = gql`
    query link($id: Int!) {
        link(id: $id) {
            id
            url
            status
            created
            containedLinks
        }
    }
`;

type UseLinkProps = {
    id: number
}

type UseLinkReturnType = {
    data: {link: LinkType},
    loading: boolean,
    error: ApolloError | undefined,
}

export const useLink = (props: UseLinkProps): UseLinkReturnType => {
    const {id} = props
    const [loadLink, {data, loading, error, stopPolling}] = useLazyQuery(QUERY_LINK, {pollInterval: 3000})
    
    useEffect(() => {
        loadLink({variables: {
            id: id
        }})
    }, [id, loadLink])
    
    useEffect(() => {
        if (data?.link.status !== "RUNNING") {
            stopPolling()
        }
    }, [data?.link.status, stopPolling])
    
    return {data, loading, error}
}
