import React from 'react';
import {Nav} from 'react-bootstrap';
import './Menu.css';

export default function index() {
    return (
        <Nav defaultActiveKey="/repositories" className="flex-column menu">
            <Nav.Link href="/repositories">Repositórios</Nav.Link>
            <Nav.Link eventKey="link-1">Projetos</Nav.Link>
        </Nav>
    )
}
