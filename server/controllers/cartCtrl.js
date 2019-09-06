const cart = [{
    "id": 18,
    "name": "Dummy Data",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51I6ltgsolL._SL1001_.jpg",
    "price": 13.99,
    "category": "dummy",
    "url": "https://tinyurl.com/y53g3jnx",
    "quantity": 0
},]
let id = 0

module.exports = {
    cartItems: (req, res) => {
        res.status(200).send(cart)
    },

    addItem: (req, res) => {
        let {id, name, image, price, category, url, quantity} = req.body
        let newItem = {
            "id": id++,
            "name": name,
            "image": image,
            "price": price,
            "category": category,
            "url": url,
            "quantity": quantity
        }
        cart.push(newItem)
        res.status(200).send(cart)
    }
}