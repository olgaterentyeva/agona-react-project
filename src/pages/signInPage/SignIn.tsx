import logo from "../../images/logo.svg";
import {SignInFormWithStore} from "../../forms/SignInFormWithStore";
import styles from '../signInPage/SignIn.module.sass';

import React from "react";

export const SignIn = () => {

    return (
        <div className={styles.signIn}>
            <img src={logo} className={styles.logo} alt="logotype"/>
            <SignInFormWithStore/>
        </div>
    );
}
