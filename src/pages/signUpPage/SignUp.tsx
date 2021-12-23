import React from "react";
import logo from "../../images/logo.svg";
import {SignUpFormWithStore} from "../../forms/SignUpFormWithStore";
import styles from '../signUpPage/SignUp.module.sass';

export const SignUp = () =>{

    return (
        <div className={styles.signUp}>
            <img src={logo} className={styles.logo} alt="logotype"/>
            <SignUpFormWithStore/>
        </div>
    );
}