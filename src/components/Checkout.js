import React, { Component } from 'react';
import '../Checkout.css'
import Subtotal from './Subtotal';

class Checkout extends Component {
    render() {
        return (
            <div className="checkout">
                <div className="checkout__left">
                    <img
                        className="checkout__ad"
                        src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                        alt="#"
                    />
                    <div >
                        <h2 className="checkout__title">
                            Your shopping Basket
                        </h2>
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                    </div>
                </div>
                <div className="checkout__right">
                    <h2>The subtotal will go here</h2>
                    <Subtotal />
                </div>
            </div>
        );
    }
}

export default Checkout;