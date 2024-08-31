const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = mongoose.Schema ({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',  // This refers to the User model
        required: true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
    }
})

const Book = new mongoose.model('Book',bookSchema);

module.exports = Book;