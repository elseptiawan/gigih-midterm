const mongoose = require('mongoose');
const Video = require('./video');

const comment = mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    comment:{
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

module.exports = mongoose.model("Comment", comment);