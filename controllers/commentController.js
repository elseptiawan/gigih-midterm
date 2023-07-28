const Comment = require('../models/comment');

exports.index = async (req,res) => {
    try {
        const comments = await Comment.find().populate("videoId");
        res.json({message:"Success get Comments", data:comments});
    } catch (error) {
        res.json({message:error.message});
    }
}

exports.show = async (req,res) => {
    try {
        const comment = await Comment.findById(req.params.id).populate("videoId");
        res.json({message:"Success Get Comment", data:comment});
    } catch (error) {
        res.json({message:error.message});
    }
}

exports.store = (req,res) => {
    const comment = new Comment({
        username: req.body.username,
        comment: req.body.comment,
        videoId: req.params.videoId
    });

    try {
        comment.save();
        res.json({message:"Success Insert Comment", data:comment});
    } catch (error) {
        res.json({status:"Fail", message:error.message});
    }
}

exports.update = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            req.params.id, req.body, {new:true}
        );
        res.json({message:"Success Update Comment", data:updatedComment});
    } catch (error) {
        res.json({message:error.message});   
    }
}

exports.destroy = async (req,res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        res.json({message:"Success Delete Comment", data:deletedComment});
    } catch (error) {
        res.json({message:error.message});
    }
}