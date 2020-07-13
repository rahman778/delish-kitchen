import React, { useEffect, useState } from "react";
import firebase from "../firebase";


export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
            setLoadingAuthState(false);
            setModalShow(false)
            setError(null)         
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated: user !== null,
                setUser,
                loadingAuthState,
                setLoadingAuthState,
                modalShow,
                setModalShow,
                error,
                setError,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;