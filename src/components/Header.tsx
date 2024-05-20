import { HomeOutlined, InfoCircleOutlined, ProductOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Layout as LayoutAntd, Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const { Header: HeaderAntd } = LayoutAntd;

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: MenuItem[] = [
    {
        key: "/",
        label: <Link to="/">Home</Link>,
        icon: <HomeOutlined />
    },
    {
        key: "/products",
        label: <Link to="/products">Products</Link>,
        icon: <ProductOutlined />
    },
    {
        key: "/orders",
        label: <Link to="/orders">Orders</Link>,
        icon: <UnorderedListOutlined />
    },
    {
        key: "/about",
        label: <Link to="/about">About</Link>,
        icon: <InfoCircleOutlined />
    }
]

const Header: React.FC = () => {

    let location = useLocation();
    const [current, setCurrent] = useState<string>(location.pathname);

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

    return (
        <HeaderAntd style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[current]}
                items={menuItems}
                style={{ flex: 1, minWidth: 0 }}
            />
        </HeaderAntd>
    );
}

export default Header;