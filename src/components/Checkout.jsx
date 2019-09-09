import React from 'react'

export default class Checkout extends React.Component {
    state = {
        toggleCheckout: false
    }

    toggleCheckout = () => {
        this.setState(prevState => ({toggleCheckout: !prevState.toggleCheckout}) )
    }

    render(){
        let prods = this.props.productsInCart.map(el => {
            return (
                <div className="checkout-prod-desc">
                    <img src={el.image}/>
                    <div className="checkout-prod-desc-desc">
                        <h2>{el.name}</h2>
                        <input value={el.url}/>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <hr></hr>
                <button className="checkout-btn" onClick={() => {
                    window.scrollTo(0, 0)
                    this.toggleCheckout()}}>Check Out</button>
                {!this.state.toggleCheckout ?
                <></> :
                <div className="checkout-container">
                <div className="checkout">
                    <h2>Just kidding! I can't sell stuff here. Below are the links.</h2>
                    <p></p>
                    <div className="checkout-prod">
                        {prods}
                    </div>
                    <button onClick={() => this.toggleCheckout()}>X</button>
                </div>
                </div>
                }
            </div>
        )
    }
}