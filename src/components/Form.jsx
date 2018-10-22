import React, { Component } from 'react';
import { Button, Input } from 'antd';

class Form extends Component {
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
            <form className="Form">
                <Input
                    type="email"
                    size="large"
                    placeholder="Email"
                    value={this.state.userEmail}
                    prefix={<span className="icon-email" />}
                    onChange={this.onChangeUserEmail}
                    name="useremail" />
                <Input
                    type="text"
                    size="large"
                    placeholder="Name"
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
        )
    }
}

export default Form;