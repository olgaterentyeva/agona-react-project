import {FilmModel} from "../../models/Film.model";
import {FC} from "react";
import plus from '../../images/plus.svg';
import './SeparateFilm.css'

interface FilmProps {
    infoFilm: FilmModel;
}

export const InfoFilm: FC<FilmProps> = ({infoFilm}) => {

    return (
        <>
            <div className="whole-film">
                <img src={infoFilm.img} className="whole-film-img" alt="img"/>
                <div className="info-film">
                    <h1>{infoFilm.title}</h1>
                    <div className = "year-rating">
                        <p className="info-film-year">{infoFilm.year}</p>
                        <p className="info-film-rating">{infoFilm.rating}</p>
                    </div>
                    <div className="will-watch">
                        <button><img src={plus} className="plus" alt="plus"/>Буду смотреть</button>
                    </div>
                    <p className="info-film-desc">{infoFilm.description}</p>
                    <div className="genres">
                        <button>Фантастика</button>
                        <button>Боевик</button>
                        <button>Триллер</button>
                    </div>
                </div>
            </div>
        </>
    );
}