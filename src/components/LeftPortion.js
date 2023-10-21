import React, { useRef, useState } from 'react'
import { DropdownContent2 } from './DropdownContent2';

export const LeftPortion = () => {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);
    const [dropdown5, setDropdown5] = useState(false);
    const refElement1 = useRef("");
    const refElement2 = useRef("");
    const refElement3 = useRef("");
    const refElement4 = useRef("");
    const refElement5 = useRef("");

    const helper = ([dropdown, setDropdown], refElement, event) => {
        if(dropdown === false) {
            setDropdown(true);
            event.classList.add("transformation");
            refElement.current.style.maxHeight = refElement.current.scrollHeight + 'px';
        }
        else {
            event.classList.remove("transformation");
            setDropdown(false);
            refElement.current.style.maxHeight = null;
        }  
    }
    const onClickDropdown = (event) => {
        if(event.target.classList.contains('icon1')) {
            helper([dropdown1, setDropdown1], refElement1, event.target);        
        }
        else if(event.target.classList.contains('icon2')) {
            helper([dropdown2, setDropdown2], refElement2, event.target);          
        }
        if(event.target.classList.contains('icon3')) {
            helper([dropdown3, setDropdown3], refElement3, event.target);          
        }
        if(event.target.classList.contains('icon4')) {
            helper([dropdown4, setDropdown4], refElement4, event.target);         
        }
        if(event.target.classList.contains('icon5')) {
            helper([dropdown5, setDropdown5], refElement5, event.target);            
        }         
    }
    
    return (
        <div className="left-portion">
            <div className="dropdown">
                <div className="dropdown-btn dropdown-btn-radius">
                    <h4>Related Items</h4>
                    <i className="icon1 fa fa-angle-up" onClick={onClickDropdown}></i>
                </div>
                <div className="dropdown-content-1" ref={refElement1}>
                    <ul>
                        <li><a href="/">Electronics</a></li>
                        <li><a href="/">Home Items</a></li>
                        <li><a href="/">Books, Magazines</a></li>
                        <li><a href="/">Men's clothing</a></li>
                        <li><a href="/">Interiors items</a></li>
                        <li><a href="/">Underwears</a></li>
                        <li><a href="/">Shoes for men</a></li>
                        <li><a href="/">Accessories</a></li>
                    </ul>
                </div>
            </div>
            <div className="dropdown">
                <div className="dropdown-btn">
                    <h4>Brands</h4>
                    <i className="icon2 fa fa-angle-up" onClick={onClickDropdown}></i>
                </div>
                <div className="dropdown-content-2" ref={refElement2}>
                    <ul>
                        <DropdownContent2 id="mercedes" value="Mercedes" count="120"/>
                        <DropdownContent2 id="toyoto" value="Toyoto" count="10"/>
                        <DropdownContent2 id="mitsubishi" value="Mitsubishi" count="100"/>
                        <DropdownContent2 id="nissan" value="Nissan" count="190"/>
                        <DropdownContent2 id="honda" value="Honda" count="50"/>
                        <DropdownContent2 id="suzuki" value="Suzuki" count="12"/>
                    </ul>
                </div>
            </div>
            <div className="dropdown">
                <div className="dropdown-btn">
                    <h4>Price</h4>
                    <i className="icon3 fa fa-angle-up" onClick={onClickDropdown}></i>
                </div>
                <div className="dropdown-content-3" ref={refElement3}>
                    <div className="content-3">
                        <div className="custom-range">
                            <label htmlFor="customRange1" className="form-label"></label>
                            <input type="range" className="form-range" id="customRange1" />
                        </div>
                        <div className="input-range">
                            <div className="min-max-range">
                                <label htmlFor="min">Min</label>
                                <label htmlFor="max">Max</label>
                            </div>
                            <div className="amount">
                                <input id="min" type="number" placeholder="$0" />
                                <input id="max" type="number" placeholder="$1,0000" />
                            </div>
                        </div>
                        <div className="apply-btn">
                            <button>APPLY</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <div className="dropdown-btn">
                    <h4>Size</h4>
                    <i className="icon4 fa fa-angle-up" onClick={onClickDropdown}></i>
                </div>
                <div className="dropdown-content-4" ref={refElement4}>
                    <ul>
                        <li><a href="/">XS</a></li>
                        <li><a href="/">SM</a></li>
                        <li><a href="/">LG</a></li>
                        <li><a href="/">XXL</a></li>
                    </ul>
                </div>
            </div>
            <div className="dropdown">
                <div className="dropdown-btn">
                    <h4>Ratings</h4>
                    <i className="icon5 fa fa-angle-up" onClick={onClickDropdown}></i>
                </div>
                <div className="dropdown-content-5" ref={refElement5}>
                    <ul>
                        <li>
                            <input id="5-star" type="checkbox" />
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </li>
                        <li>
                            <input id="4-star" type="checkbox" />
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </li>
                        <li>
                            <input id="3-star" type="checkbox" />
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </li>
                        <li>
                            <input id="2-star" type="checkbox" />
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </li>
                        <li>
                            <input id="1-star" type="checkbox" />
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
