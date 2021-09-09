import React, {useEffect, useRef} from 'react'
import useBitbucket from '../../Hooks/Bitbucker-hooks';
import { InputGroup, Button, Form } from 'react-bootstrap';

const InputSearchUser = ()=> {

    const {state, clearData, setUsername, getRepositories} = useBitbucket();
    const inputSearch = useRef(null);

    useEffect(()=>{
        
        setUsername('atlassian_tutorial'); 

    }, [setUsername]);

    useEffect(()=>{
        
        getRepositories(state.username);

    }, [state.username, getRepositories]);

    function handleSearch(event) {
        
        setUsername(inputSearch.current.value);

        if(!inputSearch.current.value){   
            // console.log('Limpar dados'); 
            clearData();        
            return;
        } 
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
                    onClick={handleSearch}
                    variant="secondary" 
                    id="btn-search-user"                    
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