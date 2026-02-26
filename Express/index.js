const express = require("express")
const app = express()
const productRoutes = require("./routes/product")

app.get('/', (req, res)=>{
    res.send("This is our Home page")
})

app.get('/login', (req, res)=>{
    res.send("This is our login page")
})

app.get('/signup', (req, res)=>{
    res.send("This is our signup page")
})

app.use("/product", productRoutes)

app.listen(3001, ()=>{
    console.log("Server has been started")
})

// MVC architecture