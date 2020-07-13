import React, { useState, useContext, useEffect } from 'react';

import styles from './ErrorMessage.module.css';
import { AuthContext } from '../../../Context/AuthContext';

const ErrorMessage = () => {
    const authContext = useContext(AuthContext);
    const [opened, setOpened] = useState(true)
    
    const closeHandler = () => {
        setOpened(false)
        authContext.setError(null)
    }

    let btnClass = [styles.cookies]

    if(authContext.error ){
        btnClass.push(styles.display);
    }

    if(!opened) {
        btnClass.splice(1, 1, styles.closeCookies);
    }
    
    useEffect(() => {  
        setOpened(true)  
    }, [authContext.error])
    
   

    return (
        <div className={btnClass.join(' ')}>
            <p>{authContext.error}</p>
            <p onClick={closeHandler}><i className={`${styles.closeIcon} fas fa-times`}></i></p>
        </div>
    )
}

export default ErrorMessage
