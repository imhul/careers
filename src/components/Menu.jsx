import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../history';
import { topMenu } from '../store/initialState';
import { Menu } from 'antd';


class TopMenu extends Component {
	constructor(props) {
		super(props);
		const locate = history.location.pathname.replace(/[^\d]/g, '');
	}

	render() {
		return (
			<div className="ant-menu Menu ant-menu-light ant-menu-root ant-menu-horizontal">
				{topMenu.map(item => {
					return (
						<div key={item.key} className="ant-menu-item desktop">
							<span className={`${item.icon} menu-icon`} />
							<a href={item.href} title={item.title} className="title">{item.title}</a>
						</div>
					)
				})
				}
				{/* <li key="mobile" className="mobile">
					<ul>
					<span className="icon-list hamburger" />
						{topMenu.map(item => {
							return (
								<li key={item.key}>
									<a href={item.href} title={item.title} className="title">{item.title}</a>
								</li>
							)
						})
						}
					</ul>
				</li> */}
			</div>
		)
	}
}

export default TopMenu;