const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
});

const UserModel = mongoose.model('user', User);

module.exports = UserModel;