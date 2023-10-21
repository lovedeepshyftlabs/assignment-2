import React from 'react';

export const NavBar = () => {
    const logoImg = require('../images/logo.png');
    return (
        <nav className="navigation-bar">
            <div className="company-logo">
                <a href="/">
                    <img src={logoImg} alt="A company Logo"/>
                </a>
            </div>
            <div className="search-items">
                <input type="text" placeholder="Seach your items here.."/>
                    <button className="search-icon">
                        <i className="fa fa-fw fa-search"></i>
                    </button>
            </div>
            <div className="nav-btn">
                <div className="nav-btn-list">
                    <ul>
                        <li><i className="fa fa-fw fa-user"></i>Sign in</li>
                        <li><i className="fa fa-heart"></i> Wishlist</li>
                        <li><i className="fa fa-shopping-cart"></i> My cart</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
