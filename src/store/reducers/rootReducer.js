import { createStore, combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { careerNamesSelectReducer } from './careerNamesSelectReducer';
import { careerReducer } from "./careerReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    careerNamesSelect: careerNamesSelectReducer,
    careers: careerReducer,
})

export const store = createStore(rootReducer);


let setLocalStore = function () {

    store.subscribe(() => {
        localStorage.setItem('savedState', JSON.stringify(store.getState()));
    })
}

setLocalStore();
