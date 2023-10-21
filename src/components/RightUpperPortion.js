import React from 'react'

export const RightUpperPortion = () => {
    return (
        <div className="right-upper-portion">
            <h4>32 Items found</h4>
            <div className="nav-link services">
                <button className="services-btn">
                    <a href="/">Best Match
                        <span className="material-icons dropdown-icon"> arrow_drop_down </span>
                    </a>
                    <ul className="drop-down">
                        <li>Match 1</li>
                        <li>Match 2</li>
                        <li>Match 3</li>
                    </ul>
                </button>
            </div>
            <div className="bars-calc-btn">
                <button id="bars"><i className="fa fa fa-bars"></i></button>
                <button id="calculator"><i className="fa fa-calculator"></i></button>
            </div>
        </div>
    )
}
