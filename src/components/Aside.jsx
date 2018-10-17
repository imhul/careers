import React, { Component } from 'react';
import { specials } from '../store/initialState';
import { List, Button, Input, Icon } from 'antd';
import specialImg from '../images/jobs/job.png';

const ListItem = List.Item;

function Specials(props) {
    const { style } = props;
    const hotLabel = ( <div className="hot-label"><span className="icon-fire" /></div> );
    return (
        <List
            dataSource={specials}
            itemLayout="vertical"
            renderItem={(item, index) => (
                <ListItem>
                    <div className="aside-item-container" style={{ ...style }}>
                        { index === 0 ? hotLabel : null }
                        <img width="100%" height="auto" alt="" src={specialImg} />
                        <div className="text-conteiner">
                            <h2 className="title">{item.title}</h2>
                            <h2 className="subtitle">{item.subtitle}</h2>
                        </div>
                    </div>
                </ListItem>
            )}
        />
    )
}

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
        };
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    }

    onChangeUserName(e) {
        this.setState({ userName: e.target.value });
    }

    onChangeUserEmail(e) {
        this.setState({ userEmail: e.target.value });
    }

    render() {
        return (
            <aside>
                <div className="content-top">
                    <h2>Specials</h2>
                    <Specials />
                </div>
                <div className="content-bottom">
                    <h2>Sign up to Newsletter</h2>
                    <form>
                        <Input
                            type="email"
                            size="large"
                            placeholder="Enter your email"
                            value={this.state.userEmail}
                            prefix={<span className="icon-email" />}
                            onChange={this.onChangeUserEmail}
                            name="useremail" />
                        <Input
                            type="text"
                            size="large"
                            placeholder="Enter your username"
                            value={this.state.userName}
                            prefix={<span className="icon-persona" />}
                            onChange={this.onChangeUserName}
                            name="username" />
                        <Button
                            htmlType="submit"
                            size="large"
                            block>
                            Sign up
                        </Button>
                    </form>
                </div>
            </aside>
        )
    }
}

export default Aside;