import React from 'react'
import { FootBox } from './FootBox'

export const FootContent = () => {
    return (
        <div className="foot-content">
            <div className="copyright">
                <h1>MDB</h1>
                <h5 className="content">@ 2023 Copyright: MDBootstrap.com</h5>
            </div>
            <div className="store">
                <FootBox heading="STORE" list1="About us" list2="Find store" list3="Categories" list4="Blogs" />
            </div>
            <div className="info">
                <FootBox heading="INFORMATION" list1="Help center" list2="Money refund" list3="Shipping info" list4="Refunds" />
            </div>
            <div className="support">
                <FootBox heading="SUPPORT" list1="Help Center" list2="Documents" list3="Account restore" list4="Account restore" />
            </div>
            <div className="newsletter">
                <h5>NEWSLETTER</h5>
                <label htmlFor="email">
                    <h5 className="content">Stay in touch with latest updates about our products and offers</h5>
                </label>
                <div className="content join-newsletter">
                    <input id="email" type="text" placeholder="Email" />
                    <button className="join-btn">
                        Join
                    </button>
                </div>
            </div>
        </div>
    )
}
