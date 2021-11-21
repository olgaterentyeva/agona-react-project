import logo from "../images/logo.svg";
import {SignInForm} from "../components/forms/SignInForm";
import {Slider} from "../components/Slider";
import React from "react";

export function SignIn() {

    return (
                <div className="App">
                    <img src={logo} alt="logotype"/>
                    <SignInForm/>
                    <Slider/>
                </div>
    );
}