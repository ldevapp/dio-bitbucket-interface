import React from 'react'
import {Image} from 'react-bootstrap';
import Actions from '../Actions';
var dateFormat = require("dateformat");

export default function ListItem(props) {
    const {avatar, name, description, updated, href} = props;
    let dateUpdated = new Date(updated);
    return (
        <tr>
            <td>
                <Image src={(avatar)? avatar : 'images/avatar-profile.jpg'} width="30px" rounded /> 
                &nbsp;
                <a href={href} target="_blank"  rel="noreferrer" title={description}>{name}</a>
            </td>
            <td>{description}</td>
            <td>{dateFormat(dateUpdated, "mm/dd/yyyy HH:MM:ss")}</td>
            <td><Actions repository={props}/></td>
        </tr>
    )
}
