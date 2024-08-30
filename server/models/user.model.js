const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = mongoose.Schema ({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    wishlist:[{
        type:Schema.Types.ObjectId,
        ref:'Book'
    }]
})

const User = new mongoose.model('Users',userSchema);

module.exports = User;