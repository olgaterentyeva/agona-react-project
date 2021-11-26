import {NavLink} from "react-router-dom";
import React from "react";
import './QuestionSlider.css'

export const QuestionSlider = (props:any) => {
    return(
        <div className = "questionSlider">
            <p>{props.question}</p>
            <NavLink className = 'a' to={props.href} >
                {props.hrefText}
            </NavLink>
        </div>
    );
};