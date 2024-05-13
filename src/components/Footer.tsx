import { Layout as LayoutAntd, Menu, MenuProps } from 'antd';

const { Footer: FooterAntd } = LayoutAntd;

const Footer: React.FC = () => {
    return (
        <FooterAntd style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </FooterAntd>
    );
}

export default Footer;