const mongoose = require('mongoose');

const video = mongoose.Schema({
    title: {
        required:true,
        type:String
    },
    urlImageThumbnail: {
        required: true,
        type: String
    },
    urlVideo: {
        required: true,
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Video", video);