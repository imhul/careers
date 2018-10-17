import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import history from '../history';
import { Layout } from 'antd';
import Careers from './Pages/Careers';
import Job from './Pages/Job';
import Carousel from './Carousel';

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
                        <div className="menu"></div>
                        <div className="search">
                            {/* <form action="/search">
                                <input type="text" name="q" placeholder="Search..." />
                                <button type="submit">
                                    <span className="icon icon-search"></span>
                                </button>
                            </form> */}
                        </div>
                    </div>
                    <div className="subline">
                        <div className="container"></div>
                    </div>
                </Header>

                <Content>
                    <div className="container">
                        <ol className="breadcrumbs">
                            <li>
                                <a href="/careers">Careers</a>
                            </li>
                            {history && history.location.pathname !== '/' ? <li>
                                <span>
                                    {history.location.pathname.slice(1)}
                                </span>
                            </li> : null }
                        </ol>
                        <Switch>
                            <Route exact path="/careers" component={Careers} />
                            <Route path="/job/:id" component={Job} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    { history.location.pathname.slice(1, 4) === 'job' ? 
                    <div className="content-bottom"><div className="container"><Carousel /></div></div> : null }
                </Content>

                <Footer>
                    <div className="container"></div>
                </Footer>
            </Layout>
        );
    }
}

export default LayoutMain;