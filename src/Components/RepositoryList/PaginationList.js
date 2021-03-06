import React from 'react'
import {Pagination} from 'react-bootstrap';
import useBitbucket from '../../Hooks/Bitbucker-hooks';

const PaginationList = ()=>{

    const {state, getRepositories, setActivePage} = useBitbucket();

    const handleClickPagination = (page) => {
        return () => {
            setActivePage(page);
            getRepositories(state.username, page);
        }
    }   
   
    let items = [];
    let total = Math.ceil(state.repositories.size / state.repositories.pagelen);
    for (let number = 1; number <= total; number++) {
        items.push(
            <Pagination.Item 
                key={number} 
                active={number === state.activePage}
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
