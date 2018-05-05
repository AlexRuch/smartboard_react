import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Project from './Project.js';
import Admin from './Admin.js'

export default class App extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path='/admin' component={ Admin }/>
                <Route path='/admin/project/:projectId' component={ Project }/>
            </Switch>
        );
    }
}
