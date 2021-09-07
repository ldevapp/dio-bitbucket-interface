import React, {useEffect, useState} from 'react';
import useBitbucket from '../../Hooks/Bitbucker-hooks';
import {Card, Table} from 'react-bootstrap';

const Repositories = () => {

    const {state, getRepositories} = useBitbucket();    

    useEffect(()=>{
        getRepositories('tutorials');
    }, []);

    return (
        <Card style={{border:'none'}}>
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
                        {state.repositories.values.map((item)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.updated_on}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Repositories;