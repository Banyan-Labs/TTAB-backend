const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    avatar: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    auth0Id: {
        type: String,
        required: true
    }
    
});

const UserModel = mongoose.model('user', User);

module.exports = UserModel;