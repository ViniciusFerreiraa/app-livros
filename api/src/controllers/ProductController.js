const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async create(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        const user = req.params.userid;
        const response = await Product.findById(req.params.id);
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        const isRented = response.rented;

        if( user !== "admin") {
            if( !isRented ) {
                return res.json(product);
            } else {
                if( user === response.rentedBy ) {
                    console.warn("o user está devolvendo");
                    return res.json(product);
                } else {
                    console.warn("O livro ja foi alugado");
                    return;
                }
            }
        }
        else {
            if( !isRented ) {
                console.warn("o admim esta editando");
                return res.json(product);
            } else {
                console.warn("Livro alugado, não pode ser editado");
                return;
            }
        }
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}