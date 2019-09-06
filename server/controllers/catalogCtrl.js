const catalog = require('../data/catalog.json')

module.exports = {
    allProducts: (req, res) => {
        let filteredCatalog = catalog.filter(el => el.category === req.query.category)
        res.status(200).send(filteredCatalog)
    }
}