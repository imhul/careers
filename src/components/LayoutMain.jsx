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
                    <div className="container">
                        <div className="logo">
                            <a href="#">
                                <span className="icons-logo"></span>
                                <span className="logo-text icons">
                                    
                                </span>
                            </a>
                        </div>
                        <div className="menu"></div>
                        <div className="search"></div>
                    </div>
                    <div className="subline">
                        <div className="container"></div>
                    </div>
                </Header>

                <Content>
                    <div className="container">
                        <Switch>
                            <Route exact path="/careers" component={Careers} />
                            <Route path="/job" component={Job} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Content>

                <Footer>
                    <div className="container"></div>
                </Footer>
            </Layout>
        );
    }
}

export default LayoutMain;