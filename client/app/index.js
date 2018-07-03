import "./styles/style.scss";

import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";

import Home from "./containers/Home";
import PeopleDetails from "./containers/PeopleDetails";


import store from "./store";

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Footer from "./components/Footer";

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>

    <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/peoplelist" component={Home}/>
     	<Route path="/peopledetails" component={PeopleDetails}/>
   
    </Router>
    </Provider>,
    window.document.getElementById('app'));

