import React from 'react'
import {Image} from 'react-bootstrap';
var dateFormat = require("dateformat");

export default function ListItem({avatar, name, description, updated, href}) {
    let dateUpdated = new Date(updated);
    return (
        <tr>
            <td>
                <Image src={(avatar)? avatar : 'images/avatar-profile.jpg'} width="30px" rounded /> 
                &nbsp;
                <a href={href} target="_blank"  rel="noreferrer">{name}</a>
            </td>
            <td>{description}</td>
            <td>{dateFormat(dateUpdated, "mm/dd/yyyy HH:MM:ss")}</td>
        </tr>
    )
}
