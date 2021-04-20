import React from 'react';
import "../Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer"

function Subtotal() {
    // const [{ basket }, dispatch] = useStateValue();
    const [{ basket }] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={
                    (value) => (
                        <>
                            {/* Part of the homework */}
                            <p>
                                Subtotal ({basket.length} items):
                                <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />
                                This order contains a gift
                            </small>
                        </>
                    )
                }
                decimalScale={2}
                value={getBasketTotal(basket)}   //part of the homework
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}
export default Subtotal;