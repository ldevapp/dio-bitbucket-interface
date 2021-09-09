import React from 'react'
import {ToastContainer} from 'react-bootstrap'
import Alert from './Alert'
import useBitbucket from '../../Hooks/Bitbucker-hooks'

const AlertToast = () => {

    const {state} = useBitbucket();

    const renderAlert = (message, index)=><Alert message={message} index={index + 1} />

    return (
        <ToastContainer position="top-end" className="p-3" style={{zIndex:'9999'}}>
            {state.messages?.map(renderAlert)}
        </ToastContainer>
    )
}

export default AlertToast;
