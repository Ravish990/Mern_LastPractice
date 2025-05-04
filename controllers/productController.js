const product = require('../db/schemas/product');
const productModel = require('../db/schemas/product')


const createProduct = async(req, res) => {
    const {name, price, image, desc} =  req.body;

    const product = new productModel({name, price, image, desc});

    await product.save();

      res.status(200).json({success: true, message: "product is saved", data : product})


}

const getAllProduct = async(req,res) => {
    const products = await productModel.find({});
    if (!products) {
        res.status(400).json({success: false, message: "Product not found"})
    }

    res.status(200).json({success: true, message: "products fetched", data : products})


}

const updateProduct = async(req,res) => {
    const productId = req.params.id;

    const updatedProduct = await productModel.findByIdAndUpdate(productId, req.body);


    if (!updatedProduct) {
        res.status(400).json({success: false, message: "Product not found"})
    }

    res.status(200).json({success: true, message: "product is updated", data : updatedProduct})

}

const deleteProduct = async(req,res) => {
    const productId = req.params.id;
    const deletedProduct = productModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
        res.status(400).json({success: false, message: "Product not found"})
    }

    res.status(200).json({success: true, message: "product is deleted", data : deleteProduct})
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProduct
}

