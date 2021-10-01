const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    auth0Id: {
        type: String,
        unique: true
    }
    
});

const UserModel = mongoose.model('user', User);

module.exports = UserModel;