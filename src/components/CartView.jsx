import React from 'react'
import axios from 'axios'

export default function CartView(props) {
    let list = props.productsInCart.filter(el => {
        if (el.quantity >= 1){
            return true
        }
    })
    .map((el, i) => {
        return (
        <div key={el.id + i}>
        <img src={el.image}/>
        <h3>{el.name}</h3>
        <p>${el.price}</p>
        <button onClick={() => axios.put(`/api/cart/${el.id}/less`)}>less</button>
        <input type="number" placeholder={el.quantity} onChange={e => props.updateQuantity(el.id, e.target.value)}/>
        <button onClick={() => axios.put(`/api/cart/${el.id}/add`)}>more</button>
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