import {action, observable} from "mobx";
import {FilmModel} from "../models/Film.model";

export class FilmStore {
    //содержит поля, расширенные с помощью mobx
    //observable - некоторое поле внутри стора, перерисовывает толко конкретное поле при подписке

    @observable films: Array<FilmModel> = [
        {
            rating: 6.9,
            name: 'Минари'
        },
        {
            rating: 6.6,
            name: 'Солнцестояние'
        },
        {
            rating: 7.1,
            name: 'Манк'
        },
        {
            rating: 6.8,
            name: 'Дувушка, пода...'
        }
    ];

    @action
    addFilm = (film: FilmModel) => {
        this.films.push(film);
    }

}