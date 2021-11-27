import React from "react";
import './Input.css'

export const Input = (props:any) => {
    return (
        <div className="input">
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