import React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap';

export default function index() {
    return (
        <InputGroup>
            <FormControl
                placeholder="Usuário"
                aria-label="Usuário"
                aria-describedby="basic-addon2"
            />
            <Button variant="secondary" id="btn-search-user">
                Buscar
            </Button>
        </InputGroup>
    )
}
