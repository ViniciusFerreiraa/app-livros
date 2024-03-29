const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Userchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

Userchema.plugin(mongoosePaginate);

mongoose.model('User', Userchema);