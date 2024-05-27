import { HomeOutlined, InfoCircleOutlined, LoginOutlined, LogoutOutlined, PlusCircleOutlined, ProductOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Layout as LayoutAntd, Menu, MenuProps, Space, message } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { accountsService } from '../services/accounts.service';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout, selectEmail, selectIsAuth } from '../redux/slices/account.slice';

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

    // const { logout, email, isAuth } = useContext(AccountContext);
    const email = useAppSelector(selectEmail);
    const isAuth = useAppSelector(selectIsAuth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

    const onLogout = async () => {
        const res = await accountsService.logout();

        if (res && res.status === 200) {
            message.success(`Your have logged out successfully!`);
        }

        // ----- working with state
        // logout();
        dispatch(logout());
    }

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

            {
                isAuth ?
                    <Space>
                        <span style={{ color: "white" }}>Hello, {email}</span>
                        <span onClick={onLogout} style={{ color: "white", cursor: "pointer" }}><LogoutOutlined /></span>
                    </Space>
                    :
                    <Space size="large">
                        <Link to="/register" style={{ color: "white" }}>
                            <Space size="small">
                                <PlusCircleOutlined />
                                <span>Register</span>
                            </Space>
                        </Link>
                        <Link to="/login" style={{ color: "white" }}>
                            <Space size="small">
                                <LoginOutlined />
                                <span>Login</span>
                            </Space>
                        </Link>
                    </Space>
            }

        </HeaderAntd>
    );
}

export default Header;