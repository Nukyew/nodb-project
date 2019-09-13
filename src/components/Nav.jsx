import React from 'react'

export default class Nav extends React.Component {
    state = {
        itemsInCart: null
    }
    
    render(){
            return(
                <nav>
                <h2 id="store" onClick={e => this.props.switchView(e.target.id)}>STORE</h2>
                <h2 id="cart" onClick={e => this.props.switchView(e.target.id)}>CART {/* ({this.state.itemsInCart}) */}</h2>
            </nav>
        )
    }
}