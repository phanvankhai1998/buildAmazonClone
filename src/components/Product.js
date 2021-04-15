import React, { Component } from 'react';
import '../Product.css';

class Product extends Component {
    render() {
        var { id, title, image, price, rating } = this.props;
        return (
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>*****</p>
                            ))
                        }
                    </div>
                </div>
                <img
                    alt=""
                    src={image}
                ></img>
                <button>Add to Basket</button>
            </div>
        );
    }
}

export default Product;