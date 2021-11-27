import React from "react";
import {Header} from "../../components/header/Header";
import './Collection.css';
import {ToggleSwitch} from "../../components/ui/toggleSwitch/ToggleSwitch";
import menu from "../../images/menu.svg";

export function Collection() {
    return (
        <div className="collection">
                <Header />
                <h1>Коллекция</h1>
                <div className="switch_menu">
                    <ToggleSwitch />
                    <img src={menu} alt="menu"/>
                </div>
        </div>
);
}