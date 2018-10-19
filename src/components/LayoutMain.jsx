import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import history from '../history';
import { Layout, Row, Col, } from 'antd';
import Careers from './Pages/Careers';
import Menu from './Menu';
import Job from './Pages/Job';
import Carousel from './Carousel';
import Breadcrumbs from './Breadcrumbs';
import Form from './Form';


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

                <Footer>

                    <div className="container desktop">
                        <Row gutter={24} type="flex" align="top" justify="space-between">
                            <Col span={4} className="footer-list">
                                <p>Specials & Dials</p>
                                <p>About Us</p>
                                <p>Careers</p>
                                <p>Sitemap</p>
                                <p>Terms of Use</p>
                            </Col>
                            <Col span={4} className="footer-list">
                                <p className="heading">Marijuana Strains</p>
                                <p>Indica</p>
                                <p>Sativa</p>
                                <p>Hybrid</p>
                            </Col>
                            <Col span={4} className="footer-list">
                                <p>Cannabis Concentrates</p>
                                <p>Cannabis Topicals</p>
                                <p>Marijuana Edibles</p>
                                <p>Vape</p>
                                <p>Apparel & Accessories</p>
                            </Col>
                            <Col span={6} className="footer-form"><Form /></Col>
                            <Col span={6} className="footer-social">email...</Col>
                        </Row>
                    </div>

                    <div className="button-container mobile"><span className="icon-home"></span></div>
                    <div className="button-container mobile"><span className="icon-map"></span></div>
                    <div className="button-container mobile"><span className="icon-logo1"></span></div>
                    <div className="button-container mobile"><span className="icon-persona"></span></div>
                    <div className="button-container mobile"><span className="icon-shopping_cart"></span></div>
                </Footer>
            </Layout>
        );
    }
}

export default LayoutMain;