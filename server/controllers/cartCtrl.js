const cart = []
let id = 0

module.exports = {
    cartItems: (req, res) => {
        res.status(200).send(cart)
    },
    addProduct: (req, res) => {
        let index = cart.findIndex(el => el.id === req.body.id)
        if (index === -1){
            cart.push({
                "id": req.body.id,
                "name": req.body.name,
                "image": req.body.image,
                "price": req.body.price,
                "category": req.body.category,
                "url": req.body.url,
                "quantity": 1
            })
            res.status(200).send(cart)
        } else{
            cart[index].quantity = 1 + cart[index].quantity
            res.status(200).send(cart)
        }
    },
    removeItem: (req, res) => {
        let index = cart.findIndex(el => el.id === +req.params.id)
        cart.splice(index, 1)
        res.status(200).send(cart)
    },
    updateQuantity: (req, res) => {
        let index = cart.findIndex(el => el.id === +req.params.id)
        cart[index].quantity = +req.body.quantity
        res.status(200).send(cart)
    },

    addOne: (req, res) => {
        let index = cart.findIndex(el => el.id === +req.params.id)
        cart[index].quantity = 1 + cart[index].quantity
        res.status(200).send(cart)
    },
    subtractOne: (req, res) => {
        let index = cart.findIndex(el => el.id === +req.params.id)
        if (cart[index].quantity >= 1){
            cart[index].quantity = cart[index].quantity - 1
            res.status(200).send(cart)
        } else if (cart[index].quantity === 0){
            
        }
    }
}