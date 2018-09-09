import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Layout } from 'antd';
// components
import Careers from './Pages/Careers';
import Job from './Pages/Job';

const { Content } = Layout;

class LayoutMain extends Component {
    render() {
        const NotFound = () => { return (
            <h1>Sorry! Page Not Found:(</h1>
        )}
        return (
            <Layout className="LayoutMain">

                <Layout className="Main">
                    <Content>
                        <Switch>
                            <Route exact path="/careers" component={Careers} />
                            <Route path="/job" component={Job} />
                            <Route component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>

            </Layout>
        );
    }
}

export default LayoutMain;