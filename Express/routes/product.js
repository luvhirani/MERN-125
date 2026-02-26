const express = require("express")
const {getProducts,deleteProduct,updateProduct,createProduct}= require("../controller/product")

const router = express.Router()

router.get("/getProducts",getProducts)
router.post("/createProducts",createProduct)
router.delete("/deleteProduct", deleteProduct)
router.put("/updateProduct",updateProduct )

module.exports = router;