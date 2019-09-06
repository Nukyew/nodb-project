import React, {Component} from 'react'
import Product from './Product'
import CategorySelect from './CategorySelect'
import axios from 'axios'

export default class StoreView extends Component {
    state = {
        selectedCategory: '',
        productsView: []
    }

    selectCategory = (category) => {
        /* this.setState({
            selectedCategory: category
        }) */
        axios.get(`/api/catalog?category=${category}`).then(res => {
            this.setState({
                productsView: res.data,
                selectedCategory: category
            })
        })
    }

    render(){
        let products = this.state.productsView.map((el, i) => {
            return (
                <Product key={el.id} product={el}/>
            )
        })
        return(
            <section>
                <CategorySelect selectCategory={this.selectCategory}/>
                {/* Product below must be mapped based off of criteria */}
                {products}
            </section>
        )
    }
}