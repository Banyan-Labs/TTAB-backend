const mongoose = require('mongoose');

const URI = "mongodb+srv://JoshuaBeets:Big_tom1@backendcluster0.herqe.mongodb.net/test";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopolgy: false,
        useNewUrlParser: false
}, () => console.log('db connected..!'));
};

module.exports = connectDB;

