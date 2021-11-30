import {BaseLayout} from "../../components/baseLayout/BaseLayout";
import {observer} from "mobx-react";
import {useStores} from "../../utils";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {FilmModel} from "../../models/Film.model";
import {InfoFilm} from "../../components/separateFilm/SeparateFilm";

interface Params {
    id: string;
}

export const SeparateFilmPage = observer(() => {
    const {id} = useParams<Params>();
    const [infoFilm, setInfoFilm] = useState<FilmModel>();
    const {filmStore: {films}} = useStores();

    useEffect(() => {
        const infoFilm = films.find(film => film.id === +id);

        setInfoFilm(infoFilm);
    }, [id, films]);


    return (
        <>
            <BaseLayout>
                <div className="film-page">
                    {infoFilm && (
                        <div><InfoFilm infoFilm={infoFilm}/></div>
                    )}
                </div>
            </BaseLayout>
        </>
    );
});