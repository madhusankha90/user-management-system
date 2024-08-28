const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:Number,
    name:String
})

const User = mongoose.model('users',userSchema);

module.exports = User;