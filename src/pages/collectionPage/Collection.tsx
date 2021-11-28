import React from "react";
import {Header} from "../../components/header/Header";
import './Collection.css';
import {ToggleSwitch} from "../../components/ui/toggleSwitch/ToggleSwitch";
import menu from "../../images/menu.svg";
import {observer} from "mobx-react";
import {useStores} from "../../utils";
import {Film} from "../../components/Film";

export const Collection = observer(() => {
    const {filmStore: {films}} = useStores();

    return (
        <div className="collection">
                <Header />
                <h1>Коллекция</h1>
                <div className="switch_menu">
                    <ToggleSwitch />
                    {/*<img src={menu} alt="menu"/>*/}
                </div>
                <div className="filmsCollection">
                    <div className="film">
                        {films.map(film => (
                            <Film key={film.id} film={film} />
                        ))}
                    </div>
                </div>
        </div>
    );
});