const express = require('express');

const productController = require('../controllers/productController')

const router = express.Router();

router.get("/",productController.getAllProduct)

router.post("/add", productController.createProduct)
router.delete("/delete/:id", productController.deleteProduct)
router.put('/update/:id', productController.updateProduct)


module.exports = router;

