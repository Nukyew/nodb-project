require('dotenv').config();
const express = require('express');
const app = express();
const {SERVER_PORT} = process.env;
const catalogCtrl = require('./controllers/catalogCtrl')
const cartCtrl = require('./controllers/cartCtrl')

app.use(express.json());

app.get('/api/catalog', catalogCtrl.allProducts)

app.get('/api/cart', cartCtrl.cartItems)
app.post('/api/cart', cartCtrl.addProduct)
app.delete('/api/cart/:id', cartCtrl.removeItem)
app.put('/api/cart/:id', cartCtrl.updateQuantity)
app.put('/api/cart/:id/add', cartCtrl.addOne)
app.put('/api/cart/:id/less', cartCtrl.subtractOne)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} clowns in the clown car`));