import React from "react";
import {Header} from "../../components/header/Header";
import './Collection.css';
import {ToggleSwitch} from "../../components/toggleSwitch/ToggleSwitch";

export function Collection() {
    return (
        <div className="collection">
            <Header />
            <h1>Коллекция</h1>
            <ToggleSwitch />
        </div>
);
}