import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Layout } from 'antd';
import Careers from './Pages/Careers';
import Job from './Pages/Job';

const { Content, Header, Footer } = Layout;

class LayoutMain extends Component {
    render() {
        const NotFound = () => { return (
            <h1>Sorry! Page Not Found:(</h1>
        )}
        return (
            <Layout className="LayoutMain">
                <Header>
                    <div className="menu"></div>
                    <div className="subline"></div>
                </Header>

                <Content>
                    <Switch>
                        <Route exact path="/careers" component={Careers} />
                        <Route path="/job" component={Job} />
                        <Route component={NotFound} />
                    </Switch>
                </Content>

                <Footer>

                </Footer>
            </Layout>
        );
    }
}

export default LayoutMain;