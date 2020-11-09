import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import LogInPage from './Login/LogInPage';
import CreateAccount from './Login/CreateAccount';
import common from '../Utils/Common'   ;

function MainComponent(props) {
    return (
        <div >
               <Switch>
               <Route  path={common.mainPage} component={MainPage} />
               <Route  path={common.createAccount} component={CreateAccount} />
               <Route  path={common.login} component={LogInPage} />
            </Switch>
        </div>
    );
}

export default MainComponent;