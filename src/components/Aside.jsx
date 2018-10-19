import React, { Component } from 'react';
import { specials } from '../store/initialState';
import { List } from 'antd';
import Form from './Form';
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

    render() {
        return (
            <aside>
                <div className="content-top">
                    <h2>Specials</h2>
                    <Specials />
                </div>
                <div className="content-bottom">
                    <h2>Sign up to Newsletter</h2>
                    <Form />
                </div>
            </aside>
        )
    }
}

export default Aside;