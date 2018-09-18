import { createStore, combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { careerNamesSelectReducer } from './careerNamesSelectReducer';
import { careerReducer } from "./careerReducer";
import { careerGeoSelectReducer } from './careerGeoSelectReducer';
// import { filterGeoReducer } from "./filterGeoReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    careerNamesSelect: careerNamesSelectReducer,
    careers: careerReducer,
    locations: careerGeoSelectReducer,
    // geoFilter: filterGeoReducer
})

const store = createStore(rootReducer);

let setLocalStore = function () {

    store.subscribe(() => {
        localStorage.setItem('savedState', JSON.stringify(store.getState()));
    })
}

setLocalStore();

export default store;
