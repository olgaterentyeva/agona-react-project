import React from "react";
import miniLogo from "./../../images/mini-logo.svg";
// import collectionImg from "./../../images/coolectionImg.svg"
// import avatar from "../images/avatar.svg";
import "./Header.css"

export function Header() {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="hrefs">
                    <a href="#" className="leftHref">Коллекция</a>
                    <a href="#" className="leftHref">Добавить</a>
                </div>
                    <img src={miniLogo} className="miniLogo" alt="mini logotype"/>
                <div className="hrefs">
                    <a href="#" className="">Поиск</a>
                    {/*<img src={avatar} alt="avatar"/>*/}
                </div>
            </div>
        </div>
    );
}