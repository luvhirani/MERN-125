const getProducts = (req,res) =>{
    res.send("Response from get Products controller")
}

const deleteProduct = (req,res) =>{
    res.send("Response from delete Products controller")
}

const updateProduct = (req,res) =>{
    res.send("Response from update Products controller")
}

const createProduct = (req,res) =>{
    res.send("Response from create Products controller")
}

module.exports ={getProducts,deleteProduct,updateProduct,createProduct}