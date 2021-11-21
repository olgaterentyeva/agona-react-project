import React from "react";
import logo from "../images/logo.svg";
import {Slider} from "../components/Slider";
import {SignUpForm} from "../components/forms/SignUpForm";

export function SignUp() {

    return (
        <div className="App">
            <img src={logo} alt="logotype"/>
            <SignUpForm/>
            <Slider/>
        </div>
    );
}