import React, { ReactElement } from 'react'
import { Form } from 'inaam-rapid-react'
import { Link } from 'react-router-dom';

interface Props {
    
}

export default function Category({}: Props): ReactElement {
    return (
        <div>
            <h4 className="mb-3">
                Add/Edit Categories
                <Link className="btn btn-info float-right" to="/categories">Back</Link>
            </h4>
            <Form />
        </div>
    )
}
