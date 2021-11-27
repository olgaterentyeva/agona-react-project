import React from 'react';
import './App.css';
import './pages/signPages/Sign.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {SignIn} from "./pages/signPages/SignIn";
import {SignUp} from "./pages/signPages/SignUp";
import {Main} from "./pages/mainPage/Main";
import {Collection} from "./pages/collectionPage/Collection";
import {Provider} from "mobx-react";
import {mainStore} from "./stores/MainStore";
import {Redirect} from "react-router";

function App() {

    return (
        <Router>
            <Provider {...mainStore}>
                <Switch>
                    <Route path='/' exact component={Main}/>
                    <Route path='/signIn' exact component={SignIn}/>
                    <Route path='/signUp' exact component={SignUp}/>
                    <Route path='/collection' exact component={Collection}/>
                    <Redirect  to="/collection"/>
                </Switch>
            </Provider>
        </Router>
    );

}
export default App;
