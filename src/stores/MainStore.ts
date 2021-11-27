import {FilmStore} from "./FilmStore";

class MainStore {
    filmStore: FilmStore;

    constructor() {
        this.filmStore = new FilmStore();
    }
}

export const mainStore = new MainStore();

export default MainStore;