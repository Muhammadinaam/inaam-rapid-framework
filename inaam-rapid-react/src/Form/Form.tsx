import React, { ReactElement } from 'react'

interface Props {
    urlToGetJsonSchema?: string,
    jsonSchema?: object,
}

export default function Form(props: Props): ReactElement {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('form submitted');
    }

    return (
        <form onSubmit={handleSubmit}>
            {props.urlToGetJsonSchema}
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}
