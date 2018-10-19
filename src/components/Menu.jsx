import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../history';
import { careers } from '../store/initialState';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class TopMenu extends Component {
	constructor(props) {
		super(props);
		const locate = history.location.pathname.replace(/[^\d]/g, '');
		this.state = {
			current: locate
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({
			current: (e.key <= 2) ? e.key : e.key - 1,
		});
		e.key === 'careers' ? history.replace('/careers') : history.replace(`/job/${e.key}`);
	}

	render() {
		return (
			<Menu
				onClick={this.handleClick}
				selectedKeys={[this.state.current]}
				mode="horizontal"
				className="Menu"
			>{console.info("loc: ", history.location.pathname)}
				<MenuItem 
					key="careers" 
					className={history.location.pathname === '/careers' ? 'desktop ant-menu-item-active' : 'desktop' }>
					<Link to="/careers" className="title">Careers</Link>
					<span className="icon-list hamburger" />
				</MenuItem>
				{careers.map((item, index) => {
					return (
						<MenuItem key={item.key} className="desktop">
							<a href="" className="title">Career {item.key}</a>
						</MenuItem>
					)
				})
				}
				<SubMenu className="mobile" title={<span className="icon-list hamburger" />}>
					<MenuItem 
						key="careers"
						className={history.location.pathname === '/careers' ? 'ant-menu-item-active' : null }>
						<Link to="/careers" className="title">Careers</Link>
					</MenuItem>
					{careers.map((item, index) => {
						return (
							<MenuItem key={item.key}>
								<a href="" className="title">Career {item.key}</a>
							</MenuItem>
						)
					})
					}
				</SubMenu>
			</Menu>
		)
	}
}

export default TopMenu;