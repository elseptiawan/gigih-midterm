const mongoose = require('mongoose');
const Video = require('./video');

const product = mongoose.Schema({
    linkProduct:{
        required:true,
        type:String
    },
    title:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
    urlImage:{
        required:true,
        type:String
    },
    videoId:{
        type: mongoose.Types.ObjectId, 
        ref: "Video"
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Product", product);