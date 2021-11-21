import React from 'react';
import './App.css';
import './assets/style.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";


function App() {

    return (
        <Router>
            <Switch>
                <Route path='/signIn' exact component={SignIn}/>
                <Route path='/signUp' exact component={SignUp}/>
            </Switch>
        </Router>
    );

}

export default App;
