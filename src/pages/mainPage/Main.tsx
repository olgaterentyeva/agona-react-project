import logo from "../../images/logo.svg";
import agona from "../../images/agona.svg";
import React from "react";
import {BaseLayout} from "../../components/baseLayout/BaseLayout";
import styles from './Main.module.sass';

export function Main() {
    return (
        <BaseLayout>
                <img src={logo} className={styles.appLogo} alt="logo"/>
                <img src={agona} className = {styles.agona} alt="agona"/>
        </BaseLayout>
    );
}