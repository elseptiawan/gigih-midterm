const Product = require('../models/product');

exports.index = async (req,res) => {
    try {
        const products = await Product.find({'videoId': req.params.videoId}).populate("videoId");
        res.json({message:"Success get Products", data:products});
    } catch (error) {
        res.json({message:error.message});
    }
}

exports.show = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id).populate("videoId");
        res.json({message:"Success Get Product", data:product});
    } catch (error) {
        res.json({message:error.message});
    }
}

exports.store = (req,res) => {
    const product = new Product({
        linkProduct: req.body.linkProduct,
        title: req.body.title,
        price: req.body.price,
        videoId: req.params.videoId
    });

    try {
        product.save();
        res.json({message:"Success Insert Product", data:product});
    } catch (error) {
        res.json({message:error.message});
    }
}

exports.update = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, req.body, {new:true}
        );
        res.json({message:"Success Update Product", data:updatedProduct});
    } catch (error) {
        res.json({message:error.message});   
    }
}

exports.destroy = async (req,res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.json({message:"Success Delete Product", data:deletedProduct});
    } catch (error) {
        res.json({message:error.message});
    }
}