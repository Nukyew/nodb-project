import React, {Component} from 'react'
import StoreView from './StoreView'
import CartView from './CartView'
import axios from 'axios'

export default class Store extends Component {
    state = {
        productsInCart: [],
        selectedCategory: '',
        productsView: []
    }

    componentDidUpdate = () => {
        this.state.productsInCart.forEach((el, i, arr) => {
            if (arr.length >= 1 && el.quantity === 0){
                let array = []
                array = this.state.productsInCart
                if (el.quantity === 0){
                    array.splice(i, 1)
                }
                this.setState({
                    productsInCart: array
                })
            }
        })
        console.log(this.state.productsInCart)
    }

    selectCategory = (category) => {
        axios.get(`/api/catalog?category=${category}`).then(res => {
            this.setState({
                productsView: res.data,
                selectedCategory: category
            })
        })
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

    updateQuantity = (id, quantity) => {
        axios.put(`/api/cart/${id}`, {quantity: quantity}).then(res => {
            console.log("quantity updated")
        })
    }

    render(){
        return(
            <main>
                {this.props.storeView === 'store' ?
                <StoreView
                jonMode={this.props.jonMode} 
                addToCart={this.addToCart}
                selectCategory={this.selectCategory}
                productsView={this.state.productsView}
                /> :
                <CartView 
                productsInCart={this.state.productsInCart}
                removeFromCart={this.removeFromCart}
                updateQuantity={this.updateQuantity}
                />}
            </main>
        )
    }
}