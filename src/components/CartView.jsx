import React from 'react'
import axios from 'axios'

export default function CartView(props) {
    /* axios.get('/api/cart').then(res => {
        
    }) */
    let list = props.productsInCart.map((el, i) => {
        return (
        <div key={el.id + i}>
        <img src={el.image}/>
        <h3>{el.name}</h3>
        <p>${el.price}</p>
        <input placeholder={el.quantity}/>
        <button onClick={() => props.removeFromCart(el.id)}>Remove From Cart</button>
        </div>
        )
    })
    return(
        <section>
            {props.productsInCart.length === 0 ? 
            <p>Add something to your cart!</p> :
            <div>{list}</div>}
        </section>
    )
}