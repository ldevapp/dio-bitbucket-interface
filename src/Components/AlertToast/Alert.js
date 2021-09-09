import React, {useState} from 'react';
import { Toast } from 'react-bootstrap';

const Alert = ({message, index}) => {

    const delay = 10000;
    const {type, title, text} = message;
    const [show, setShow] = useState(true);

    return (
        <Toast key={`alert-toast-${index}`} onClose={() => setShow(false)} bg={type} show={show} delay={delay} autohide animation>
            <Toast.Header>
                <strong className="me-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}

export default Alert;