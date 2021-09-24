const mongoose = require('mongoose');

const user = new mongoose.Schema({
        name:{
            type:String
        },
});

module.export = user = mongoose.model('user', user);