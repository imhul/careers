import React, { Component } from 'react';
import { Button } from 'antd';
import store from "../../../store/reducers/rootReducer";
import CareerNamesSelect from "./Filter--CareerNamesSelect";

class Filter extends Component {

    render(){
        return <aside className="filter">
                <Button>New Career</Button>
               <CareerNamesSelect namesList={ store.getState().careerNamesSelect }/>
            </aside>
    }
}

export default Filter;
