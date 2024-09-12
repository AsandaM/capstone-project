import {getProductsDb, getProductDb, deleteProductDb, insertProductDb, editProductDb} from '../model/productsDb.js'

// get all products
const getProducts = async(req, res)=>{
    try{
        res.status(200).json(await getProductsDb())
    } catch(err){
        res.status(500).send('Error fetching products')
        throw err
        
    }
}

// get single product by id
const getProduct = async(req, res)=>{
    try {
        res.status(200).json(await getProductDb(req.params.id))
        
    } catch (err) {
        res.status(500).send({message:'Error fetching  a single product'})
        throw err
    }
}

// insert product

const insertProduct = async(req, res)=>{
    let {prodName, prodDesc, type, image, category, price, duration_days, calories, benefits, instructions, ingredients} = req.body

    try {
        await insertProductDb(prodName, prodDesc, type, image, category, price, duration_days, calories, benefits, instructions, ingredients)
        res.status(200).json(await getProductDb())
        
    } catch (err) {
        res.status(500).send({message:'Error inserting a product'})
        throw err
        
    }
}

// delete product

const deleteProduct = async(req, res)=>{
    try {
        await deleteProductDb(req.params.id)
        res.status(200).json(await getProductsDb())
        
    } catch (err) {
        res.status(500).send({message:'Error deleting a products'})
        throw err
    }
}

// update product
const editProduct = async(req, res)=>{
    let {prodName, prodDesc, type, image, category, price, duration_days, calories, benefits, instructions, ingredients} = req.body
    let product = await getProductDb(req.params.id)
    
    if(!product){
        res.status(404).send({message:'Product not found'})
    }
    
    prodName? prodName = prodName: prodName = product.prodName
    prodDesc? prodDesc = prodDesc: prodDesc = product.prodDesc
    type? type = type: type = product.type
    image? image = image: image = product.image
    category? category = category: category = product.category
    price? price = price: price = product.price
    duration_days? duration_days = duration_days: duration_days = product.duration_days
    calories? calories = calories: calories = product.calories
    benefits? benefits = benefits: benefits = product.benefits
    ingredients? ingredients = ingredients: ingredients = product.ingredients
    instructions? instructions = instructions: instructions = instructions

    try {
        await editProductDb(prodName, prodDesc, type, image, category, price, duration_days, calories, benefits, instructions, ingredients, req.params.id)    
        res.status(200).send(await getProductsDb())
    } catch (err) {
        res.status(500).send({message:'Error editing a product'})
        throw err
    }
}


export {getProducts, getProduct, insertProduct, deleteProduct, editProduct}