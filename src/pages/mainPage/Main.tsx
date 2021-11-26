import logo from "../../images/logo.svg";
import agona from "../../images/agona.svg";
import React from "react";
import './Main.css';
import {Header} from "../../components/header/Header";

export function Main() {
    return (
        <div className="main">
            <Header />
            <div className="img">
                <img src={logo} className="logo" alt="logotype"/>
                <img src={agona} className="agona" alt="agona img"/>
            </div>
        </div>
    );
}