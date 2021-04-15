import React, { Component } from 'react';
import Product from './Product';
import '../Home.css'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home__container">
                    <img
                        className="home__image"
                        src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_ROW_Muti-title_Mag1._CB1564087979_._CR575,0,865,675_AC_.jpg"
                        rating={4}
                        alt=""
                    />

                    <div className="home__row">
                        <Product
                            id="1"
                            title="The lean startup"
                            price={29.99}
                            image="https://salt.tikicdn.com/cache/w444/ts/product/2b/dc/63/20cc885202e57fb0fd97656585d1621e.jpg"
                        />
                        <Product
                            id="2"
                            title="The lean"
                            price={49.99}
                            image="https://salt.tikicdn.com/cache/w444/ts/product/2b/dc/63/20cc885202e57fb0fd97656585d1621e.jpg"
                        />

                    </div>

                    <div className="home__row">
                        <Product
                            id="3"
                            title="Lean startup"
                            price={69.99}
                            image="https://salt.tikicdn.com/cache/w444/ts/product/2b/dc/63/20cc885202e57fb0fd97656585d1621e.jpg"
                        />
                        <Product
                            id="4"
                            title="Lean startup"
                            price={69.99}
                            image="https://salt.tikicdn.com/cache/w444/ts/product/2b/dc/63/20cc885202e57fb0fd97656585d1621e.jpg"
                        />
                        <Product
                            id="3"
                            title="Lean startup"
                            price={69.99}
                            image="https://salt.tikicdn.com/cache/w444/ts/product/2b/dc/63/20cc885202e57fb0fd97656585d1621e.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="3"
                            title="Lean startup"
                            price={69.99}
                            image="https://salt.tikicdn.com/cache/w444/ts/product/2b/dc/63/20cc885202e57fb0fd97656585d1621e.jpg"
                        />
                        {/* Product */}
                        {/* Product */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;