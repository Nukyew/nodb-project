import React from 'react'
import Quantity from './Quantity'
import Checkout from './Checkout'

export default function CartView(props) {
        let list = props.productsInCart.filter(el => {
            if (el.quantity >= 1){
                return true
            }
        })
        .map((el, i) => {
            return (
            <div key={el.name + i} className="cart">
                <img src={el.image}/>
                <div className="cart-prod">
                    <h3>{el.name}</h3>
                    <p>${el.price}</p>
                    <div>
                        <Quantity id={el.id} updateQuantity={props.updateQuantity} quantity={el.quantity}/>
                    </div>
                    <button onClick={() => props.removeFromCart(el.id)}>Remove</button>
                </div>
            </div>
            )
        })
        return(
            <section>
                {props.productsInCart.length === 0 ? 
                <p>Add something to your cart!</p> :
                <div>
                    <p></p>
                    {list}
                    <Checkout productsInCart={props.productsInCart}/>
                </div>}
            </section>
        )

}