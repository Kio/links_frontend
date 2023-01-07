import React, {useState} from 'react';
import TextInput from "../../ui/Inputs/TextInput/TextInput";
import Button from "../../ui/General/Button/Button";
import Title from "../../ui/General/Title/Title";
import Space from "../../ui/General/Space/Space";
import {useCreateLink} from "../../../apollo/hooks/links";
import {isValidUrl} from "../../../utils/validators";
import Alert from "../../ui/Feedback/Alert/Alert";
import {useNavigate} from "react-router-dom";

const CreateLinkForm = (): JSX.Element => {
    const navigate = useNavigate();
    const [url, setUrl] = useState<string>("")
    const [error, setError] = useState<string | undefined>()
    const {createLink, loading} = useCreateLink()
    const onFormSubmit = () => {
        if (!url || !isValidUrl(url)) {
            setError("Wrong URL")
            return
        }
        setError(undefined)
        createLink(url).then(({data}) => {
            navigate(`/links/${data.createLink.id}`)
        }).catch((error) => {
            setError(
                `Error while creating link.
                Wrong URL or server error.
                Server response: ${error.toString()}.`
            )
        })
    }
    return (<>
        <Title
            level={1}
        >
            Create New Link
        </Title>
        {error &&
            <Alert>
                {error}
            </Alert>
        }
        <TextInput
            required
            label="URL"
            placeholder="Example: http://google.com/"
            value={url}
            onChange={setUrl}
        />
        <Button
            loading={loading}
            onClick={onFormSubmit}
        >
            Go
        </Button>
        <Space height={20}/>
    </>)
}

export default CreateLinkForm