const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const users = await User.paginate({}, { page, limit: 10 });

        return res.json(users);
    },
    
    async create(req, res){
        // Criação
        const users = await User.create(req.body);

        return res.json(users);
    },
}