import React from 'react';
import {Card, Table} from 'react-bootstrap';

export default function index() {
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
                        <tr>
                            <td>LogoLingaguem - Repositório</td>
                            <td>Descrição</td>
                            <td>06/09/2021</td>
                        </tr>
                        <tr>
                            <td>LogoLingaguem - Repositório</td>
                            <td>Descrição</td>
                            <td>06/09/2021</td>
                        </tr>
                    </tbody>
                </Table>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
