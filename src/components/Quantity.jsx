import React from 'react'
import axios from 'axios'

export default class Quantity extends React.Component {
    state ={
        quantity: 1
    }

    componentDidMount = () => {
        this.setState({
            quantity: this.props.quantity
        })
    }

    render(){
        return (
            <div className="cart-quantity">
                <button onClick={() => {
                    if (this.state.quantity >= 1){
                        this.setState({
                            quantity: this.state.quantity - 1
                        })
                        axios.put(`/api/cart/${this.props.id}/less`)
                    } else if (this.state.quantity === 0) {
                        axios.put(`/api/cart/${this.props.id}/less`)
                    }
                    }}>-</button>
                <input type="number" placeholder={this.state.quantity} onChange={e => this.props.updateQuantity(this.props.id, e.target.value)}/>
                <button onClick={() => {
                    this.setState({
                        quantity: 1 + this.state.quantity
                    })
                    axios.put(`/api/cart/${this.props.id}/add`)
                    }}>+</button>
            </div>
        )
    }
}