import {getProductsDb, getProductDb, deleteProductDb, insertProductDb, editProductDb, insertPackageDb, getPackageDb} from '../model/productsDb.js'

// get all products
const getProducts = async(req, res)=>{
    try{
        res.status(200).json(await getProductsDb())
    } catch(err){
        res.status(500).send('Error fetching products')
        throw err
        
    }
}

const getPackage = async(req, res)=>{
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
        res.status(500).send('Error fetching  a single product')
        throw err
    }
}

// insert product

const insertProduct = async(req, res)=>{
    let {prodName, price, prodDesc, image, category, quantity, ingredients, usage_instructions} = req.body

    try {
        await insertProductDb(prodName, price, prodDesc, image, category, quantity, ingredients, usage_instructions)
        res.status(200).json(await getProductDb())
        
    } catch (err) {
        res.status(500).send('Error inserting a product')
        throw err
        
    }
}

const insertPackage = async(req, res)=>{
    let {packageName, price, packageDesc, image, category, duration, usage_instructions} = req.body

    try {
        await insertPackageDb(packageName, price, packageDesc, image, category, duration, usage_instructions)
        res.status(200).json(await getPackageDb())
        
    } catch (err) {
        res.status(500).send('Error inserting a packageuct')
        throw err
        
    }
}

// delete product

const deleteProduct = async(req, res)=>{
    try {
        await deleteProductDb(req.params.id)
        res.status(200).json(await getProductsDb())
        
    } catch (err) {
        res.status(500).send('Error deleting a products')
        throw err
    }
}

// update product
const editProduct = async(req, res)=>{
    let {prodName, price, prodDesc, image, category, quantity, ingredients, usage_instructions} = req.body
    let product = await getProductDb(req.params.id)

    console.log(product);
    

    if(!product){
        res.status(404).send('Product not found')
    }
    
    prodName? prodName = prodName: prodName = product.prodName
    quantity? quantity = quantity: quantity = product.quantity
    price? price = price: price = product.price
    category? category = category: category = product.category
    image? image = image: image = product.image
    prodDesc? prodDesc = prodDesc: prodDesc = product.prodDesc
    ingredients? ingredients = ingredients: ingredients = product.ingredients
    usage_instructions? usage_instructions = usage_instructions: usage_instructions = product.usage_instructions

    try {
        await editProductDb(prodName, price, prodDesc, image, category, quantity, ingredients, usage_instructions, req.params.id)    
        res.status(200).send(await getProductsDb())
    } catch (error) {
        res.status(500).send('Error editing a product')
        throw err
    }
}


export {getProducts, getProduct, insertProduct, deleteProduct, editProduct, insertPackage, getPackage}