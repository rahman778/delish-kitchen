import React from 'react'
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase";

const Logout = (props) => {
    const history = useHistory();
    const handleClick = () => { 
      firebase.auth().signOut().then(res => {
         history.push("/");
       })
    }

    return (
        <li 
        className={props.className}
        onClick={handleClick}>
            Logout
        </li>
    )
}

export default Logout
