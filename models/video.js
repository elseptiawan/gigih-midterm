const mongoose = require('mongoose');

const video = mongoose.Schema({
    urlImageThumbnail: {
        required: true,
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Video", video);