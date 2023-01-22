import React, { useState, useEffect } from "react";

const ErrorBoundry = (props) => {

    const[hasError, setError] = useState(false);

    useEffect((error, info) => {
        if (error) setError(true);
    });


    if (hasError) {
        return <h1>Ooops, there is an error</h1>
    }
    return props.children;
}

export default ErrorBoundry;