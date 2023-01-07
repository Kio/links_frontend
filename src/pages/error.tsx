import React from 'react';
import HomeButton from "../components/ui/Navigation/HomeButton/HomeButton";
import Alert from "../components/ui/Feedback/Alert/Alert";

const ErrorPage = (): JSX.Element => {
    return (<>
        <HomeButton/>
        <Alert>
            Unexpected error
        </Alert>
    </>)
}

export default ErrorPage