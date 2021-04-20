import React from 'react';
import "../Header.css"

import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStateValue } from "./StateProvider";

function Header() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img
                    alt="#"
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option">
                        <span className="header_optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header_optionLineTwo">
                            Sign in
                        </span>
                    </div>
                </Link>


                <div className="header__option">
                    <span className="header_optionLineOne">
                        Returns
                        </span>
                    <span className="header_optionLineTwo">
                        & Orders
                        </span>
                </div>

                <div className="header__option">
                    <span className="header_optionLineOne">
                        Your
                        </span>
                    <span className="header_optionLineTwo">
                        Prime
                        </span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwoheader__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;