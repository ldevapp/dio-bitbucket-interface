import React from 'react';
import {Nav, Placeholder} from 'react-bootstrap';
import './Menu.css';
import useBitbucket from '../../Hooks/Bitbucker-hooks';

const Menu = () => {

    const { state } = useBitbucket();

    if(state.loading){
        return (
            <>
                <Placeholder xs={4} align="right"/>
                <Placeholder xs={4} align="right"/>
                <Placeholder xs={4} align="right"/>
            </>
        )
    }

    if(!state.repositories.values.length){
        return <></>
    }

    return (
        <Nav defaultActiveKey="/repositories" className="flex-column menu">
            <Nav.Link href="/repositories">Repositórios</Nav.Link>
            {/* <Nav.Link eventKey="link-1">Projetos</Nav.Link> */}
        </Nav>
    )
};

export default Menu;
