import {FilmStore} from "./FilmStore";
import SignInStore from "./SignInStore";

class MainStore{

    filmStore:FilmStore;
    signInStore:SignInStore;

    constructor() {
        this.filmStore = new FilmStore();
        this.signInStore = new SignInStore();
    }
}

export const mainStore = new MainStore();
export default MainStore;