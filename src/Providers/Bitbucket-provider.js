import React, { createContext, useCallback, useState } from "react";
import Api from '../Services/Api';

const stateDefault = {
    hasUser: false,
    loading: false,
    username: 'atlassian_tutorial',
    user: {
        username: null,
        name: null,
        website: null,
        project: null,
        avatar: null,
    },
    page: 1,
    repositories: {
        values:[]
    }
};

export const BitbucketContext = createContext({
    loading: false,
    user: {},
    repositories: []
});

const BitbucketProvider = ({children}) => {
    const [state, setState] = useState(stateDefault);

    const getRepositories = (username, page=1)=> {
        
        // setState((prevState)=>({
        //     ...prevState,
        //     loading: !prevState.loading
        // }));
        if(username === null || username == ''){
            setState((prevState)=>({
                ...prevState,
                loading: !prevState.loading,
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
                loading: !prevState.loading,
                repositories: data,
            }));
        });

    };

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

    const hasRepositories = () => {
        return (state.repositories.values.length > 0)? true : false;
    }

    const setPage = async (page) => {
        // console.log(page);
        await setState((prevState)=>({
            ...prevState,
            page: page,
        }));
    }

    const contextValue = {
        state,
        getRepositories: useCallback((username, page) => getRepositories(username, page), []),
        setUsername: useCallback((username) => setUsername(username), []),
        setUser: useCallback((user) => setUser(user), []),
        hasRepositories: useCallback(() => hasRepositories(), []),
        setPage: useCallback((page) => setPage(page), []),
    };

    return (
        <BitbucketContext.Provider value={contextValue}>
            {children}
        </BitbucketContext.Provider>
    );
};

export default BitbucketProvider;
