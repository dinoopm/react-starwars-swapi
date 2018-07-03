import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import people from "./reducers/PeopleListReducer";
import peopledetails from "./reducers/PeopleDetailsReducer";

import { routerReducer } from 'react-router-redux'

export default createStore(
    combineReducers({
    	routing: routerReducer,
        people,
        peopledetails
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);