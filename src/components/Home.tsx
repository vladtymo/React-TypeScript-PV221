import { Carousel } from "antd";

const Home: React.FC = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Welcome to PV221 Shop{":)"}</h1>
            <Carousel autoplay>
                <div>
                    <img style={imageStyle} alt='test' src='https://cdn.pixabay.com/photo/2014/10/22/18/24/central-embassy-498554_640.jpg' />
                </div>
                <div>
                    <img style={imageStyle} alt='test' src='https://i.pinimg.com/originals/76/f6/a1/76f6a1c1bf175b83466e6abde17164b8.png' />
                </div>
                <div>
                    <img style={imageStyle} alt='test' src='https://cdn.pixabay.com/photo/2014/10/22/18/24/central-embassy-498560_640.jpg' />
                </div>
            </Carousel>

        </div>
    )
}

const imageStyle: React.CSSProperties = {
    objectFit: "cover",
    width: "100%",
    height: "400px"
};

export default Home;