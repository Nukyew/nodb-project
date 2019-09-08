import React from 'react'

export default function Nav(props) {
    return(
        <div className="navbar">
            <h2 id="store" onClick={e => props.switchView(e.target.id)}>STORE</h2>
            <h2 id="cart" onClick={e => props.switchView(e.target.id)}>CART</h2>
        </div>
    )
}