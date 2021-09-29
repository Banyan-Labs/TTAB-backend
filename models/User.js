const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
    
});

const User = mongoose.model('user', User);

module.exports = User;