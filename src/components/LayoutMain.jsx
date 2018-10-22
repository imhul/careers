import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import history from '../history';
import { Layout, Row, Col, } from 'antd';
import Careers from './Pages/Careers';
import Menu from './Menu';
import Job from './Pages/Job';
import Carousel from './Carousel';
import Breadcrumbs from './Breadcrumbs';
import BottomMenu from './BottomMenu';

const { Content, Header } = Layout;

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
                            <a href="/">
                                <span className="icon-logo1"></span>
                                <span className="icon-logo"></span>
                            </a>
                        </div>
                        <Menu />
                        <div className="search">
                            {/* <form action="/search">
                                <input type="text" name="q" placeholder="Search..." />
                                <button type="submit">
                                    <span className="icon icon-search"></span>
                                </button>
                            </form> */}
                            <span className="icon-search"></span>
                        </div>
                    </div>
                    <div className="subline"></div>
                </Header>

                <Content>
                    <div className="container">
                        <Breadcrumbs />
                        <Switch>
                            <Route exact path="/careers" component={Careers} />
                            <Route path="/job/:id" component={Job} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    { history.location.pathname.slice(1, 4) === 'job' ? 
                    <div className="content-bottom desktop"><div className="container"><Carousel /></div></div> : null }
                </Content>

                <BottomMenu />
                
            </Layout>
        );
    }
}

export default LayoutMain;