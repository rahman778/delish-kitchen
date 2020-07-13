import React, {  useContext } from 'react';
import "firebase/auth";
import firebase from "../../../firebase";
import { useForm } from 'react-hook-form';

import styles from './Login.module.css';
import { CssTextField, BootstrapButton } from '../../UI/Theme/Theme';
import { AuthContext } from '../../../Context/AuthContext';


const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const Login = (props) => {
  const authContext = useContext(AuthContext);
  

  const { register, handleSubmit, errors } = useForm();

  const signIn = async e => {
    let response;
    try {
      authContext.setLoadingAuthState(true)
      response = await firebase.auth().signInWithEmailAndPassword(e.email, e.password)
      
    } catch (error) {
      authContext.setLoadingAuthState(false);
      authContext.setError(error.message);
    }
    if(response){
    authContext.setUser(response.user);
    authContext.setLoadingAuthState(false);
    authContext.setModalShow(false)
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(signIn)} noValidate>
      <CssTextField
        error={errors.email ? true : false}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        inputRef={register({ required: true, pattern: emailRegex })}
        id="email"
        label="Email Address"
        name="email"
        autoComplete="off"
        autoFocus
       
      />
      <span className={styles.errorMessage}>
        {errors.email && errors.email.type === "required" && <span>Email is required</span>}
        {errors.email && errors.email.type === "pattern" && <span>Invalid email</span>}
      </span>

      <CssTextField
        error={errors.password ? true : false}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        inputRef={register({ required: true, minLength: 6 })}
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="off"
        
      />
      <span className={styles.errorMessage}>
        {errors.password && errors.password.type === "required" && <span>Password is required</span>}
        {errors.password && errors.password.type === "minLength" && <span>Password must have at least 6 characters</span>}
      </span>

      <BootstrapButton
        type="submit"
        fullWidth
        variant="contained"
      >
        Sign In
      </BootstrapButton>

      <div className="row justify-content-center mt-3">
        <button onClick={props.click} className={`${styles.toggleBtn} btn`}>
          Don't have an account? Sign Up
          </button>
      </div>
    </form>
  )
}

export default Login
