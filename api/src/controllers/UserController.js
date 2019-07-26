"use strict"

const mongoose = require('mongoose');

const User = mongoose.model('User');
module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const users = await User.paginate({}, { page, limit: 30 });

        return res.json(users);
    },

    async create ( req, res ) {
        const user = await User.create(req.body);
        return res.json(user);
    }
}