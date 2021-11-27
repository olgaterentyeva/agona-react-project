import React, {useEffect} from "react";
import './FilmCollection.css'
import {observer} from "mobx-react-lite";
import {useStores} from "../../utils";

const Films = observer(() => {
    const {filmStore} = useStores();


    return (
        <div>
            {/*{filmStore.films.map(film => (*/}
            {/*    //пока нет компоненты фильма*/}
            {/*    <Film key={film.name} film={film} />*/}
            {/*))}*/}
        </div>
    );
});
