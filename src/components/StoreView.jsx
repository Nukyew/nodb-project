import React from 'react'
import Product from './Product'
import CategorySelect from './CategorySelect'

export default function StoreView(props) {
    let products = props.productsView.map((el, i) => {
        return (
            <Product addToCart={props.addToCart} key={el.id} product={el}/>
        )
    })
        return(
            <section>
                <CategorySelect jonMode={props.jonMode} selectCategory={props.selectCategory}/>
                {/* Product below must be mapped based off of criteria */}
                <div className="productsview">
                    {products}
                </div>
            </section>
        )
}