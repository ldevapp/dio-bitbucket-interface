import React, { createContext, useCallback, useState } from "react";
import Api from '../Services/Api';

export const BitbucketContext = createContext({
    loading: false,
    user: {},
    repositories: []
});

const BitbucketProvider = ({children}) => {
    const [state, setState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined
        },
        repositories: {
            values:[]
        }
    });

    const getRepositories = (username)=> {
        
        // setState((prevState)=>({
        //     ...prevState,
        //     loading: !prevState.loading
        // }));

        Api.get(`2.0/repositories/${username}/`).then(({data})=>{
            console.log("data: " + JSON.stringify(data));
            setState((prevState)=>({
                ...prevState,
                loading: !prevState.loading,
                repositories: data,
            }));
        });

    };

    const contextValue = {
        state,
        getRepositories: useCallback((username) => getRepositories(username), []),
    };

    return (
        <BitbucketContext.Provider value={contextValue}>
            {children}
        </BitbucketContext.Provider>
    );
};

export default BitbucketProvider;
