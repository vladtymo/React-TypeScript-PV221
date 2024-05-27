import React from 'react';
import { Layout as LayoutAntd, theme } from 'antd';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const { Content } = LayoutAntd;

const Layout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <LayoutAntd className='Layout'>
            <Header />

            <Content className='Main'
                style={{
                    padding: '0 48px',
                    marginTop: 28
                }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}>
                    {/* show component based on active link */}
                    <Outlet />
                </div>
            </Content>

            <Footer />
        </LayoutAntd>
    );
};

export default Layout;