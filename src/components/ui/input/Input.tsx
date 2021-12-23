import React from "react";
import styles from './Input.module.sass'

export const Input = (props:any) => {
    return (
        <div className={styles.input}>
            <input
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}