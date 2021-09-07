import React, {useState} from 'react'
import {Pagination} from 'react-bootstrap';
import useBitbucket from '../../Hooks/Bitbucker-hooks';

const PaginationList = ()=>{

    let [active, setActive] = useState(1);
    const {state, getRepositories, setPage} = useBitbucket();

    const handleClickPagination = (page) => {
        return () => {
            console.log(page);
            // setPage(page);
            setActive(page);
            getRepositories(state.username, page);
        }
    }   
   
    let items = [];
    let total = Math.ceil(state.repositories.size / state.repositories.pagelen);
    for (let number = 1; number <= total; number++) {
        items.push(
            <Pagination.Item 
                key={number} 
                active={number === active}
                onClick={handleClickPagination(number)}
            >
            {number}
            </Pagination.Item>
        );
    }

    return (
        <Pagination size="sm">{items}</Pagination>
    )
};

export default PaginationList;
