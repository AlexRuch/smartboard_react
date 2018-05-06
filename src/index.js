import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import reducer from './reducers';
import App from './containers/App';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' component={App}/>  
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));
