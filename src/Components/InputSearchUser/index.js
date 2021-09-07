import React, {useEffect, useState, useRef} from 'react'
import useBitbucket from '../../Hooks/Bitbucker-hooks';
import { InputGroup, Button, Form } from 'react-bootstrap';

const InputSearchUser = ()=> {

    const {state, setUsername, getRepositories} = useBitbucket();
    const inputSearch = useRef(null);

    useEffect(()=>{
        if(state.user)
            getRepositories(state.username);
    }, [state.username]);

    function handleSearch(event) {

        setUsername(inputSearch.current.value)
    }

    return (
        <Form>
            <InputGroup>
                <Form.Control
                    type="Text"
                    ref={inputSearch}
                    placeholder="Usuário"
                    aria-label="Usuário"
                    aria-describedby="basic-addon2"
                    defaultValue={state.username}
                    required
                />                
                <Button 
                    variant="secondary" 
                    id="btn-search-user"
                    onClick={handleSearch}
                >
                    Buscar
                </Button>
                <Form.Control.Feedback type="invalid">
                    Obrigatório.
                </Form.Control.Feedback>
            </InputGroup>
        </Form>
    )
};

export default InputSearchUser;