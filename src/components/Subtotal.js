import React, { Component } from 'react';
import "../Subtotal.css"
import CurrencyFormat from "react-currency-format";

class Subtotal extends Component {
    render() {
        return (
            <div className="subtotal">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            {/* Part of the homework */}
                            <p>
                                {/* Subtotal ({basket.length} items):
                                <strong>{`${value}`}</strong> */}
                                Subtotal ( 0 items):
                                <strong>0</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />
                                This order contains a gift
                            </small>
                        </>
                    )
                    }
                    decimalScale={2}
                    // value={getBasketTotal(basket)}
                    value={0}       //part of the homework
                    displayType={"text"}
                    thousandsSeparator={true}
                    prefix={"MONEY"}


                />

                <button>Proceed to Checkout</button>
            </div>
        );
    }
}

export default Subtotal;