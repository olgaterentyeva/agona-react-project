import React from "react";
import miniLogo from "./../../images/mini-logo.svg";
// import collectionImg from "./../../images/circle.svg"
// import avatar from "../images/avatar.svg";
import "./Header.css"

export function Header() {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="hrefs">
                    <a href="#">Коллекция</a>
                    <a href="#">Добавить</a>
                </div>
                    <img src={miniLogo} className="miniLogo" alt="mini logotype"/>
                <div className="hrefs">
                    <a href="#">Поиск</a>
                    {/*<img src={avatar} alt="avatar"/>*/}
                </div>
            </div>
        </div>
    );
}