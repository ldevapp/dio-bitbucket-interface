import React from 'react';
import {Nav} from 'react-bootstrap';
import './Menu.css';
import useBitbucket from '../../Hooks/Bitbucker-hooks';

const Menu = () => {

    const { hasRepositories } = useBitbucket();

    return (
        <Nav defaultActiveKey="/repositories" className="flex-column menu">
            <Nav.Link href="/repositories">Repositórios</Nav.Link>
            <Nav.Link eventKey="link-1">Projetos</Nav.Link>
        </Nav>
    )
};

export default Menu;
