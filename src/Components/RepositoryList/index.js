import React from 'react';
import useBitbucket from '../../Hooks/Bitbucker-hooks';
import {Card, Table, Placeholder} from 'react-bootstrap';
import ListItem from './ListItem';
import PaginationList from './PaginationList';
import './RepositoryList.css';

const Repositories = () => {

    const {state} = useBitbucket();   
    
    const renderListItem = (item, index) => {

        const {name, description, updated_on, links} = item;

        return (
            <ListItem
                key={index.toString()}
                avatar={links.avatar.href}
                name={name}
                description={description}
                updated={updated_on}
                href={links.html.href}
            />
        )
    }

    if(state.loading){
        return (
            <>
                <Placeholder xs={1} md={1}/>
                <br/>
                <Placeholder xs={12}/>
                <Placeholder xs={12}/>
                <Placeholder xs={12}/>
                <Placeholder xs={12}/>
                <Placeholder xs={12}/>
                <Placeholder xs={12}/>
                <Placeholder xs={12}/>
                <Placeholder xs={12}/>
                <Placeholder xs={12}/>
                <Placeholder xs={12}/>
                <Placeholder xs={12}/>
                <Placeholder xs={2}/>
            </>
        )
    }

    if(!state.repositories.values.length){
        return <></>
    }

    return (
        <Card style={{border:'none'}}>
            <Card.Body>
                <Card.Title className="title">Repositórios</Card.Title>

                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th width="35%">Repositório</th>
                            <th width="40%">Descrição</th>
                            <th width="20%">Atualização</th>
                            <th width="5%">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(state.repositories.values.length > 0)
                        ?
                            state.repositories.values.map(renderListItem)
                        :
                            <tr>
                                <td colSpan="4">Nenhum registro.</td>
                            </tr>
                        }
                    </tbody>
                </Table>
                
                <PaginationList/>
                
            </Card.Body>
        </Card>
       
    )
}

export default Repositories;