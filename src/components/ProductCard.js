import React from 'react'

export const ProductCard = (props) => {
    let { image, idNo, price, discountPrice, description } = props;
    return (
        <div className="card" id={`card-${idNo}`}>
            <a href="/">
                <img src={image} alt="T-Shirt" />
            </a>
            <h2>{`$${discountPrice}`}</h2> <h3 className="price">{`$${price}`}</h3>
            <p>{description}</p>
            <button id="heart">Add To Cart</button>
            <i className="fa fa-heart"></i>
        </div>

    )
}
