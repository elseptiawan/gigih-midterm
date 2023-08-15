const Video = require('../models/video');

exports.store = (req, res) => {
    const video = new Video({
        title: req.body.title,
        urlImageThumbnail: req.body.urlImageThumbnail,
        urlVideo: req.body.urlVideo
    });

    try {
        video.save();
        res.json({message:"Success Insert Video", data: video});
    } catch (error) {
        res.json({message:error.message});
    }
}

exports.update = async (req,res) => {
    try {
        const result = await Video.findByIdAndUpdate(
            req.params.id, req.body, {new:true}
        );
        res.json({message:"Success Update Video", data: result});
    } catch (error) {
        res.json({message:error.json});
    }
}

exports.index = async (req,res) => {
    try {
        const videos = await Video.find({title: {$regex: '.*' + req.query.search + '.*', $options: 'i'}});
        res.json({message:"Success Get Videos", data: videos});
    } catch (error) {
        res.json({message:error.meesage});
    }
}

exports.show = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        res.json({message:"Success Get Video", data: video});
    } catch (error) {
        res.json({message:error.message});
    }
}

exports.destroy = async (req,res) => {
    try {
        const deletedVideo = await Video.findByIdAndDelete(req.params.id);
        res.json({message:"Success Delete Video", data: deletedVideo});
    } catch (error) {
        res.json({message:error.message});
    }
}