const cart = []
let id = 0

module.exports = {
    cartItems: (req, res) => {
        res.status(200).send(cart)
    },
    addProduct: (req, res) => {
        let {id, name, image, price, category, url} = req.body
        let index = cart.findIndex(el => el.id === id)
        if (index === -1){
            cart.push({
                "id": id,
                "name": name,
                "image": image,
                "price": price,
                "category": category,
                "url": url,
                "quantity": 1
            })
            res.status(200).send(cart)
        } else{
            cart[index].quantity = 1 + cart[index].quantity
            res.status(200).send(cart)
        }
    },
    removeItem: (req, res) => {
        let {id} = req.params
        let index = cart.findIndex(el => el.id === +id)
        if (index === -1){
            return res.status(404).send("Item Not Found")
        } else {
            cart.splice(index, 1)
            res.status(200).send(cart)
        }
    },
    updateQuantity: (req, res) => {
        let {id} = req.params
        let index = cart.findIndex(el => el.id === +id)
        cart[index].quantity = +req.body.quantity
        res.status(200).send(cart)
    },

    addOne: (req, res) => {
        let {id} = req.params
        let index = cart.findIndex(el => el.id === +id)
        cart[index].quantity = 1 + cart[index].quantity
        res.status(200).send(cart)
    },
    subtractOne: (req, res) => {
        let {id} = req.params
        let index = cart.findIndex(el => el.id === +id)
        if (cart[index].quantity >= 1){
            cart[index].quantity = cart[index].quantity - 1
            res.status(200).send(cart)
        } else if (cart[index].quantity <= 0){
            
        }
    }
}