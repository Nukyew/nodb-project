import React, {Component} from 'react'

export default class Product extends Component {
    state = {
        name: this.props.product.name,
        image: this.props.product.image,
        price: this.props.product.price,
        id: this.props.product.id,
        category: this.props.product.category,
        url: this.props.product.url,
    }

    render(){
        return(
            <div className="products">
                <img src={this.state.image} />
                <h3 title={this.state.name}>{this.state.name}</h3>
                <p>{this.state.price}</p>
                <button onClick={() => this.props.addToCart(this.state)}>Add To Cart</button>
            </div>
        )
    }
}