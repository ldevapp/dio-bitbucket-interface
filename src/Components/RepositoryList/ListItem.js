import React from 'react'
import {Image} from 'react-bootstrap';

export default function ListItem({avatar, name, description, updated}) {
    return (
        <tr>
            <td>
                <Image src={(avatar)? avatar : 'images/avatar-profile.jpg'} width="30px" rounded /> 
                &nbsp;{name}
            </td>
            <td>{description}</td>
            <td>{updated}</td>
        </tr>
    )
}
