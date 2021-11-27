import React from "react";
import './ToggleSwitch.css'

export const ToggleSwitch = () => {

    return (
        // потом тут нужно будет добавить нормальный слайдинг
        <div className="switch">
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"/>
            </label>
        </div>
    );

}