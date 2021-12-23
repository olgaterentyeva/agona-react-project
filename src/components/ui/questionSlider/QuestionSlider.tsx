import {NavLink} from "react-router-dom";
import React from "react";
import styles from './QuestionSlider.module.sass'

export const QuestionSlider = (props:any) => {
    return(
        <div className = {styles.questionSlider}>
            <p>{props.question}</p>
            <NavLink className ={styles.a} to={props.href} >
                {props.hrefText}
            </NavLink>
        </div>
    );
};