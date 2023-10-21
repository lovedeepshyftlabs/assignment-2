import React from 'react'
import { RightUpperPortion } from './RightUpperPortion'
import { ProductCard } from './ProductCard'

export const RightPortion = () => {
    const img1 = require('../images/tshirt-1.png');
    const img2 = require('../images/tshirt-2.png');
    const images = [img1, img2, img1, img2, img1, img2, img1, img2, img1];
    return (
        <div className="right-portion">
            <RightUpperPortion />
            <div className="product-card">
                {images.map((element, i) => {
                    return <ProductCard image={element} idNo={i} key={i} price={'499.99'} discountPrice={'300.00'} description={'T-shirts with multiple colors, for men and lady'} />
                })}
            </div>
        </div>
    )
}
