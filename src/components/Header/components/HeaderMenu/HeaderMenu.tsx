import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu} from 'antd';
import {HomeOutlined, PhoneOutlined, WechatOutlined, MailOutlined} from '@ant-design/icons';
import {routes} from "../../../../routes/routes";

const HeaderMenu = () => {
    const location = useLocation();

    return (
        <Menu selectedKeys={[location.pathname]} mode="horizontal">
            <Menu.Item key={routes.homePage.path} icon={<HomeOutlined/>}>
                <Link to={routes.homePage.path} >
                    Home
                </Link>
            </Menu.Item>

            <Menu.Item key={routes.callsPage.path} icon={<PhoneOutlined />}>
                <Link to={routes.callsPage.path}>
                    Calls
                </Link>
            </Menu.Item>

            <Menu.Item key={routes.chatsPage.path} icon={<WechatOutlined />}>
                <Link to={routes.chatsPage.path}>
                    Chats
                </Link>
            </Menu.Item>

            <Menu.Item key={routes.emailsPage.path} icon={<MailOutlined />}>
                <Link to={routes.emailsPage.path}>
                    E-mails
                </Link>
            </Menu.Item>
        </Menu>
    );
}

HeaderMenu.displayName = "HeaderMenu";

export default HeaderMenu;
