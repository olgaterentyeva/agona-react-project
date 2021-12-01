import "./CollectionFilmsPage.css"
import {BaseLayout} from "../../components/baseLayout/BaseLayout";
import {observer} from "mobx-react";
import {useStores} from "../../utils";
import {Film} from "../../components/film/Film";
import {ToggleSwitch} from "../../components/ui/toggleSwitch/ToggleSwitch";
import menu from '../../images/menu.svg'
import {NavLink} from "react-router-dom";

export const CollectionFilmsPage = observer(() => {

    const {filmStore: {films}} = useStores();

    return (
        <>
            <BaseLayout

            >
                <h1 className = "collectionTitle">Коллекция</h1>
                <div className="switch-menu">
                    <ToggleSwitch/>
                    <img src={menu} alt="menu"/>
                </div>
                <div className="filmCollection">
                    <div className="film">
                        {films.map(film => (
                            <div><Film key={film.id} film={film}/></div>
                        ))}
                    </div>

                </div>
            </BaseLayout>
        </>
    );
});