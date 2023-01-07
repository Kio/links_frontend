import {useLazyQuery, gql, ApolloError, useMutation} from '@apollo/client';
import {useCallback, useEffect} from "react";
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

const CREATE_LINK = gql`
    mutation createLink($url: String!) {
        createLink(url: $url) {
            id
        }
    }
`;

type UseCreateLinkReturnType = {
    createLink: (url: string) => Promise<any>
    loading: boolean
}

export const useCreateLink = (): UseCreateLinkReturnType => {
    const [createLinkMutation, {loading}] = useMutation(CREATE_LINK, {
		refetchQueries: [{query: QUERY_LINKS}]
	})
    const createLink = useCallback((url: string) => {
        return createLinkMutation({variables: {url: url}})
    }, [createLinkMutation])
    return { createLink, loading }
}