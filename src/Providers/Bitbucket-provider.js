import React, { createContext, useCallback, useState } from "react";
import Api from '../Services/Api';

const stateDefault = {
    hasUser: false,
    loading: false,
    messages: [
        // {type: 'danger', title:'Teste', text:'Texto da mensagem'}
    ],
    // username: 'atlassian_tutorial',
    username: null,
    user: {
        username: null,
        name: null,
        website: null,
        project: null,
        avatar: null,
    },
    activePage: 1,
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

        Api.get(`2.0/repositories/${username}/${strPage}`).then(({status, data})=>{
            // console.log("data: " + JSON.stringify(data));
            setState((prevState)=>({
                ...prevState,
                repositories: data,
            }));

            // if(data.status == 404){

            // }
        })
        .catch((data)=>{
            console.error('Erro:',data)
            // clearData();
            
            setState({
                ...stateDefault, 
                messages: [{type:'danger', title:'Erro', text: data.message}]
            });
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

    const setActivePage = (page) => {
        // console.log(user)
        setState((prevState)=>({
            ...prevState,
            activePage: page,
        }));
    }

    const setMessageError = (title, text) => {
        // console.log(user)
        // setState((prevState)=>({
        //     ...prevState,
        //     messages: [...prevState.messages, {type:'danger', title, text}],
        // }));
        setState({...stateDefault, messages: [{type:'danger', title, text}]});
        // console.log({...stateDefault, messages: [{type:'danger', title, text}]})
    }

    const contextValue = {
        state,
        clearData: useCallback(() => clearData(), []),
        getRepositories: useCallback((username, page) => getRepositories(username, page), []),
        setUsername: useCallback((username) => setUsername(username), []),
        setUser: useCallback((user) => setUser(user), []),
        setActivePage: useCallback((page) => setActivePage(page), []),
        setMessageError: useCallback((title, text) => setMessageError(title, text), [])
    };

    return (
        <BitbucketContext.Provider value={contextValue}>
            {children}
        </BitbucketContext.Provider>
    );
};

export default BitbucketProvider;
