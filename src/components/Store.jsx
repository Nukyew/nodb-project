import React, {Component} from 'react'
import StoreView from './StoreView'
import CartView from './CartView'

export default class Store extends Component {
    state = {
        productsInCart: []
    }

    render(){
        return(
            <main>
                {this.props.storeView === 'store' ? <StoreView /> : <CartView />}
            </main>
        )
    }
}