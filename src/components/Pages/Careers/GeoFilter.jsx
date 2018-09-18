import React, { Component } from 'react';
import store from "../../../store/reducers/rootReducer";
import CareerGeoSelect from "./GeoFilter--CareerGeoSelect";

class GeoFilter extends Component {

    render(){
        return <div className="geofilter">
            <CareerGeoSelect locations={ store.getState().locations }/>
        </div>
    }
}

export default GeoFilter;