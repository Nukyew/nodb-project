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
                    <div /* className="cart-quantity" */>
                        {/* <button onClick={() => axios.put(`/api/cart/${el.id}/less`)}>-</button> */}
                        <Quantity id={el.id} updateQuantity={props.updateQuantity} quantity={el.quantity}/>
{/*                         <input type="number" placeholder={el.quantity} onChange={e => this.props.updateQuantity(el.id, e.target.value)}/>
                        <button onClick={() => axios.put(`/api/cart/${el.id}/add`)}>+</button> */}
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

/* export default function CartView(props) {
    let list = props.productsInCart.filter(el => {
        if (el.quantity >= 1){
            return true
        }
    })
    .map((el, i) => {
        return (
        <div key={el.id + i} className="cart">
            <img src={el.image}/>
            <div className="cart-prod">
                <h3>{el.name}</h3>
                <p>${el.price}</p>
                <div className="cart-quantity">
                    <button onClick={() => axios.put(`/api/cart/${el.id}/less`)}>-</button>
                    <input type="number" placeholder={el.quantity} onChange={e => props.updateQuantity(el.id, e.target.value)}/>
                    <button onClick={() => axios.put(`/api/cart/${el.id}/add`)}>+</button>
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
            <div>{list}</div>}
        </section>
    )
} */