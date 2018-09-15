import React, { Component } from 'react';
import store from "../../../store/reducers/rootReducer";
import CareerGeoSelect from "./GeoFilter--CareerGeoSelect";

class GeoFilter extends Component {

    render(){
        return <div className="geofilter">
            <CareerGeoSelect namesList={ store.getState().careerGeoSelect }/>
        </div>
    }
}

export default GeoFilter;