import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';

interface Props {

}

export default function Categories({ }: Props): ReactElement {
    return (
        <div>
            <h4 className="mb-3">
                Categories
                <Link className="btn btn-primary float-right" to="/categories/create">Add New</Link>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Activated</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}
