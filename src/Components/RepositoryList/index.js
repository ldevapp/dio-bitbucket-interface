import React from 'react';
import useBitbucket from '../../Hooks/Bitbucker-hooks';
import {Card, Table, Placeholder} from 'react-bootstrap';
import ListItem from './ListItem';
import PaginationList from './PaginationList';

const Repositories = () => {

    const {state, getRepositories} = useBitbucket();    

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
                            <th width="40%">Repositório</th>
                            <th width="40%">Descrição</th>
                            <th width="20%">Atualização</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(state.repositories.values.length > 0)
                        ?
                            state.repositories.values.map((item, index)=>(
                                <ListItem
                                    key={index.toString()}
                                    avatar={item.links.avatar.href}
                                    name={item.name}
                                    description={item.description}
                                    updated={item.updated_on}
                                    href={item.links.html.href}
                                />
                            ))
                        :
                            <tr>
                                <td colSpan="3">Nenhum registro.</td>
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