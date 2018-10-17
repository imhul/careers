import React, { Component } from 'react';
import { Button } from 'antd';


class Apply extends Component {
    render() {
        return (
            <Button 
                href="https://recruiting.paylocity.com/Recruiting/Jobs/Details/5713" 
                className="Apply"
                target="_blank"
                size="large"
                block>Apply</Button>
        )
    }
}

export default Apply;