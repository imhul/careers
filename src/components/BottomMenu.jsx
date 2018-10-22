import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { bottomMenu } from '../store/initialState';
import Form from './Form';

const { Footer } = Layout;

const col1 = bottomMenu.filter(item => item.id <= 1003);
const col2 = bottomMenu.filter(item => (item.id >= 1004) && (item.id <= 1007));
const col3 = bottomMenu.filter(item => (item.id >= 1008) && (item.id <= 1012));

class BottomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <Footer>
                <div className="desktop">
                    <Row gutter={24} type="flex" align="top" justify="space-between">
                        <Col md={7} xl={4} className="footer-list">
                            {col1.map(item => {
                                return (
                                    <p key={item.id}>
                                        <a href={item.href} title={item.title} target="_self">
                                            {item.title}
                                        </a>
                                    </p>
                                )
                            })}
                        </Col>
                        <Col span={4} className="footer-list x-large">
                            {col2.map(item => {
                                return (
                                    <p key={item.id} className={item.parent === true ? 'heading' : 'child'}>
                                        <a href={item.href} title={item.title} target="_self">
                                            {item.title}
                                        </a>
                                    </p>
                                )
                            })}
                        </Col>
                        <Col span={4} className="footer-list x-large">
                            {col3.map(item => {
                                return (
                                    <p key={item.id}>
                                        <a href={item.href} title={item.title} target="_self">
                                            {item.title}
                                        </a>
                                    </p>
                                )
                            })}
                        </Col>
                        <Col md={7} xl={6} className="footer-form">
                            <span>Subscribe to our mailing list</span>
                            <Form />
                        </Col>
                        <Col md={10} xl={6} className="footer-social">
                            <div className="title">Contact Us</div>
                            <div className="email">
                                <a href="https://silverstemcannabis.com/contact-us" title="contact us" target="_self">
                                    <span className="icon-email" />
                                    info[at]silverstemcannabis.com
                                </a>
                            </div>
                            <div className="social">
                                <div className="icon-container">
                                    <a href="https://www.instagram.com/silverstemdispensaries" title="instagram" target="_self">
                                        <span className="icon-instagram" />
                                    </a>
                                </div>
                                <div className="icon-container">
                                    <a href="https://www.facebook.com/SilverStemCo/" title="facebook" target="_self">
                                        <span className="icon-facebook" />
                                    </a>
                                </div>
                                <div className="icon-container">
                                    <a href="" title="google plus" target="_self">
                                        <span className="icon-Google" />
                                    </a>
                                </div>
                                <div className="icon-container">
                                    <a href="https://twitter.com/silver_stem" title="twitter" target="_self">
                                        <span className="icon-twitter" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="button-container mobile">
                    <span className="icon-home"></span>
                </div>
                <div className="button-container mobile">
                    <span className="icon-map"></span>
                </div>
                <div className="button-container mobile">
                    <span className="icon-logo1"></span>
                </div>
                <div className="button-container mobile">
                    <span className="icon-persona"></span>
                </div>
                <div className="button-container mobile">
                    <span className="icon-shopping_cart"></span>
                </div>
            </Footer>
        )
    }
}

export default BottomMenu;

