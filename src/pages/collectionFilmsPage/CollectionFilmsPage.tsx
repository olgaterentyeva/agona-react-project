import styles from "./CollectionFilmsPage.module.sass"
import {BaseLayout} from "../../components/baseLayout/BaseLayout";
import {observer} from "mobx-react";
import {useStores} from "../../utils";
import {Film} from "../../components/film/Film";
import {ToggleSwitch} from "../../components/ui/toggleSwitch/ToggleSwitch";
import menu from '../../images/menu.svg'

export const CollectionFilmsPage = observer(() => {

    const {filmStore: {films}} = useStores();

    return (
        <>
            <BaseLayout>
                <h1 className = {styles.collectionTitle}>Коллекция</h1>
                <div className={styles.switchMenu}>
                    <ToggleSwitch/>
                    <img src={menu} alt="menu"/>
                </div>
                <div className={styles.filmCollection}>
                    <div className={styles.film}>
                        {films.map(film => (
                            <div><Film key={film.id} film={film}/></div>
                        ))}
                    </div>
                </div>
            </BaseLayout>
        </>
    );
});