import logo from "../../images/logo.svg";
import agona from "../../images/agona.svg";
import React from "react";
import {BaseLayout} from "../../components/baseLayout/BaseLayout";
import './Main.css';

export function Main() {
    return (
        <BaseLayout>

            <img src={logo} className="app-logo" alt="logo"/>
            <img src={agona} className = "agona" alt="agona"/>

        </BaseLayout>

    );
}