import React, {Component} from 'react'
import StoreView from './StoreView'
import CartView from './CartView'
import axios from 'axios'

export default class Store extends Component {
    state = {
        productsInCart: []
    }

    componentDidMount = () => {
        axios.get('/api/cart').then(res => {
            this.setState({
                productsInCart: res.data
            })
        })
    }

    addToCart = (product) => {
        axios.post('/api/cart', product).then(res => {
            this.setState({
                productsInCart: res.data
            })
        })
    }

    removeFromCart = (id) => {
        axios.delete(`/api/cart/${id}`).then(res => {
            this.setState({
                productsInCart: res.data
            })
        })
    }

    render(){
        return(
            <main>
                {this.props.storeView === 'store' ?
                <StoreView 
                addToCart={this.addToCart}
                /> :
                <CartView 
                productsInCart={this.state.productsInCart}
                removeFromCart={this.removeFromCart}
                />}
            </main>
        )
    }
}