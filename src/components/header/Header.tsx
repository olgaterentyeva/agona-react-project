import React from "react";
import {NavLink} from "react-router-dom";
import miniLogo from "./../../images/mini-logo.svg";
import circle from "../../images/circle.svg";
import plus from "../../images/plus.svg";
import loupe from "../../images/loupe.svg";
import avatar from "../../images/avatar.svg";
import "./Header.css"

export function Header() {
    return (
        <div className="header">
            <nav className="left-block">
                <div className="circle-collection" >
                    <NavLink to="/collection" className='collection-symbol' activeClassName='active'>
                        <img src={circle} alt="circle"/>
                        Коллекция
                    </NavLink>
                </div>
                <div className="plus-add">
                    <img src={plus} className="plus" alt="plus"/>
                    <p className='add'>Добавить</p>
                </div>
            </nav>

            <img src={miniLogo} className="miniLogo" alt="mini logo"/>

            <nav className="right-block">
                <img src={loupe} className="loupe" alt="loupe"/>
                <p className="search">Поиск</p>
                <img src={avatar} alt="avatar"/>
            </nav>
        </div>
    );
}