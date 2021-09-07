import React, {useEffect, useState} from 'react';
import useBitbucket from '../../Hooks/Bitbucker-hooks';
import {Card, Table} from 'react-bootstrap';
import ListItem from './ListItem';
import PaginationList from './PaginationList';

const Repositories = () => {

    const {state, getRepositories, hasRepositories} = useBitbucket();    

    return (
       
        <Card style={{border:'none'}} visuallyHidden={state.loading}>
            <Card.Body>
                <Card.Title className="title">Repositórios</Card.Title>
                <Card.Text>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th width="40%">Repositório</th>
                            <th width="40%">Descrição</th>
                            <th width="20%">Atualização</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(state.repositories.values.length > 0)
                        ?
                            state.repositories.values.map((item)=>(
                                <ListItem
                                    avatar={item.links.avatar.href}
                                    name={item.name}
                                    description={item.description}
                                    updated={item.updated_on}
                                />
                            ))
                        :
                            <tr>
                                <td colspan="3">Nenhum registro.</td>
                            </tr>
                        }
                    </tbody>
                </Table>
                <PaginationList/>
                
                </Card.Text>
            </Card.Body>
        </Card>
       
    )
}

export default Repositories;