import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col, Dropdown } from 'antd';
import { Link } from 'react-router';

const { Header, Sider, Content } = Layout; 
const { SubMenu, Item } = Menu;  

class Index extends Component {
 	constructor(props) {
 		super(props);
 	}

 	static defaultProps = {
 		title: '系统管理',
 		subTitle: '系统主页 '
 	}

 	render() {
 		const UserMenu = (
 				<Menu>
				    <Item><div>我的消息</div></Item> 
				    <Item><div>设置</div></Item> 
				    <Item style={{'borderTop': '1px solid #e8e8e8', 'paddingTop': '10px'}}><div>退出登录</div></Item> 
				</Menu>
 			);

 		let headerPaddingStyle = {paddingLeft: '20px', paddingRight: '20px'};
 		let contentrPaddingStyle = {paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px'};

 		return ( 
			<Layout className="admin-index-wrap">
				<Sider className="bg-white" width={210} style={{'borderRight': '1px solid #e8e8e8'}}>
					<Link to={'/admin-index'} className="logo">
						<img src={require('assets/images/logo.png')} alt="logo" />
					</Link>

					<Menu theme="light" mode="inline" defaultSelectedKeys={['item-1']} defaultOpenKeys={['sub-1']} style={{'borderRight': 'none'}}>
						<SubMenu key="sub-1" title={<span><Icon type="setting" />系统管理</span>} > 
							<Item key="item-1">用户管理</Item>
						</SubMenu>

						<SubMenu key="sub-2" title={<span><Icon type="file-text" />文档管理</span>}>

						</SubMenu>
					</Menu>
				</Sider>

				<Layout className="bg-white">
					<Header className="bg-white" style={headerPaddingStyle}>
						<Row>
							<Col span={12}></Col>
							<Col span={12} className="align-right">
								<Dropdown overlay={UserMenu}>
									<a className="ant-dropdown-link" style={{display: 'inline-block', height: '100%'}}>
										userName
										<img className="default-logo" src={require('assets/images/defaultlogo.png')} />
									</a>
								</Dropdown>
							</Col>
						</Row>
					</Header>
					<Content className="bg-white" style={contentrPaddingStyle}>
						<Row>
							<Col span={12}><b>{this.props.subTitle}</b></Col>
							<Col span={12} className="align-right">
								{this.props.title} <span style={{padding: '0 4px'}}>/</span> {this.props.subTitle} 
							</Col> 
						</Row>

						{this.props.children }
					</Content>
				</Layout>
			</Layout> 
 		)
 	}
}

export default Index;