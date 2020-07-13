import React, {  useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import "firebase/auth";
import firebase from "../../../firebase";
import styles from '../Login/Login.module.css';
import { CssTextField, BootstrapButton } from '../../UI/Theme/Theme';
import { AuthContext } from '../../../Context/AuthContext';


const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const Register = (props) => {

    const authContext = useContext(AuthContext);

    const { register, handleSubmit, errors, watch  } = useForm();
    const passwordMatch = useRef({});
    passwordMatch.current = watch("password", "");

    const signUp = async e => {
        let response;
        try {
          authContext.setLoadingAuthState(true)
          response = await firebase.auth().createUserWithEmailAndPassword(e.email, e.password)
          
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
        <form className={styles.form} onSubmit={handleSubmit(signUp)} noValidate>
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

            <CssTextField
                error={errors.password1 ? true : false}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                inputRef={register({ required: true, validate: value => value === passwordMatch.current || "The passwords do not match" })}
                name="password1"
                label="Re Type Password"
                type="password"
                id="password1"
                autoComplete="off"
            />
            <span className={styles.errorMessage}>
                {errors.password1 && errors.password1.type === "required" && <span>Password is required</span>}
                {errors.password1 && <span>{errors.password1.message}</span>}
            </span>

            <BootstrapButton
                type="submit"
                fullWidth
                variant="contained"
            >
                Sign Up
            </BootstrapButton>

            <div className="row justify-content-center mt-3">
                <button onClick={props.click} className={`${styles.toggleBtn} btn`}>
                    Already have an account? Sign in
          </button>
            </div>
        </form>
    )
}

export default Register
