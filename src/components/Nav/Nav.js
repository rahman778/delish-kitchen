import React, { useState, Fragment, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import styles from './Nav.module.css';
import logo from '../../assets/logo.png'
import AuthModal from '../UI/Modal/AuthModal';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import { AuthContext } from '../../Context/AuthContext';
import Logout from '../Auth/Logout/Logout';

const Nav = (props) => {
    const authContext = useContext(AuthContext)

    const [classes, setClasses] = useState(false);
    const [loginShow, setLoginShow] = useState(true);

    const loadRegister = (e) => {
        e.preventDefault()
        setLoginShow(false)
    }

    const loadLogin = (e) => {
        e.preventDefault()
        setLoginShow(true)
    }

    const navToggle = () => {
        setClasses(states => (
            !states
        ))
    }

    let humburgerClass = [styles.hamburger];
    let navLinkClass = [styles.navLinks];

    if (classes) {
        humburgerClass.push(styles.toggle);
        navLinkClass.push(styles.open)
    }

    let modalContent

    if (loginShow) {
        modalContent = <Login click={loadRegister} />
    }
    else {
        modalContent = <Register click={loadLogin} />
    }

    let navClass = styles.nav1;
    if (props.location.pathname === '/') {
        navClass = styles.nav;
    }

    let authNav;
    if (!authContext.user) {
        authNav = (
            <li
                className={`${classes ? styles.fade : null} ${styles.auth}`}
                onClick={() => authContext.setModalShow(true)}>
                <i className="fas fa-user"></i>
            </li>
        )
    } else {
        authNav = <Logout className={`${classes ? styles.fade : null} ${styles.logout}`} />
    }

    return (
        <Fragment>
            <nav className={navClass}>
                <div className={styles.logo}>
                    <Link exact="true" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div onClick={navToggle} className={humburgerClass.join(' ')}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
                <ul className={navLinkClass.join(' ')}>
                    <NavLink onClick={navToggle} exact activeStyle={{ color: '#c5c5c5' }} to="/">
                        <li className={classes ? styles.fade : null}>Home</li>
                    </NavLink>
                    <NavLink onClick={navToggle} activeStyle={{ color: '#c5c5c5' }} to="/recipes">
                        <li className={classes ? styles.fade : null}>Recipes</li>
                    </NavLink>
                    <NavLink onClick={navToggle} activeStyle={{ color: '#c5c5c5' }} to="/videos">
                        <li className={classes ? styles.fade : null}>Videos</li>
                    </NavLink>
                    {authNav}
                </ul>
            </nav>

            <AuthModal
                show={authContext.modalShow}
                onHide={() => authContext.setModalShow(false)}>
                {modalContent}
                {authContext.loadingAuthState && (<div className="Loader">
                    <div className="spinner-border text-primary" style={{ width: '4rem', height: '4rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>)}
            </AuthModal>
        </Fragment>
    )
}

export default withRouter(Nav)
