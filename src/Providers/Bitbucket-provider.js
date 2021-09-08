import React, { createContext, useCallback, useState } from "react";
import Api from '../Services/Api';

const stateDefault = {
    hasUser: false,
    loading: false,
    // username: 'atlassian_tutorial',
    username: null,
    user: {
        username: null,
        name: null,
        website: null,
        project: null,
        avatar: null,
    },
    repositories: {
        values:[]
    }
};

export const BitbucketContext = createContext({...stateDefault});

const BitbucketProvider = ({children}) => {
    const [state, setState] = useState({...stateDefault});

    const getRepositories = (username, page=1)=> {
        
        setState((prevState)=>({
            ...prevState,
            loading: true
        }));

        if(username === null || username === ''){
            setState((prevState)=>({
                ...prevState,
                loading: false,
                repositories: [],
            }));
            return;
        }

        let strPage = '';
        if(page)
            strPage = `?page=${page}`

        Api.get(`2.0/repositories/${username}/${strPage}`).then(({data})=>{
            // console.log("data: " + JSON.stringify(data));
            setState((prevState)=>({
                ...prevState,
                repositories: data,
            }));
        })
        .catch((data)=>{
            console.error('Erro:',data)
        })
        .finally(()=>{
            setState((prevState)=>({
                ...prevState,
                loading: false
            }));
        });

    };

    const clearData = () => {
        setState({...stateDefault});
    }

    const setUsername = (username) => {
        setState((prevState)=>({
            ...prevState,
            username: username,
        }));
    }

    const setUser = (user) => {
        // console.log(user)
        setState((prevState)=>({
            ...prevState,
            user: user,
        }));
    }

    const contextValue = {
        state,
        clearData: useCallback(() => clearData(), []),
        getRepositories: useCallback((username, page) => getRepositories(username, page), []),
        setUsername: useCallback((username) => setUsername(username), []),
        setUser: useCallback((user) => setUser(user), [])
    };

    return (
        <BitbucketContext.Provider value={contextValue}>
            {children}
        </BitbucketContext.Provider>
    );
};

export default BitbucketProvider;
