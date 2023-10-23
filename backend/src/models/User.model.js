const mongoose = require('mongoose');
const required = true
const userSchema = new mongoose.Schema({
    fullname: {
        type: String, required
    },
    password: {
        type: String, required
    },
    course:{
        type:Number, required
    },
    specialty:{
        type:String, required
    },
    faculty:{
        type:String, required
    },
    link:{
        type:String, required
    },
    about:{
        type:String, required
    },
    email:{
        type:String, required, unique: true
    },
    phone:{
        type:String, required
    },


});

module.exports = mongoose.model('User', userSchema);
