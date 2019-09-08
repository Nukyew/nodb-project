import React, {Component} from 'react'
import Product from './Product'
import CategorySelect from './CategorySelect'

export default class StoreView extends Component {
    state = {
        /* selectedCategory: '', */
        /* productsView: [] */
        derp: "asdfasdf"
    }

    /* selectCategory = (category) => {
        axios.get(`/api/catalog?category=${category}`).then(res => {
            this.setState({
                productsView: res.data,
                selectedCategory: category
            })
        })
    } */

    render(){
        let products = this.props.productsView.map((el, i) => {
            return (
                <Product addToCart={this.props.addToCart} key={el.id} product={el}/>
            )
        })
        return(
            <section>
                <CategorySelect jonMode={this.props.jonMode} selectCategory={this.props.selectCategory}/>
                {/* Product below must be mapped based off of criteria */}
                <div className="productsview">
                    {products}
                </div>
            </section>
        )
    }
}