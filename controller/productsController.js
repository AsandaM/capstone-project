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
        res.status(500).send('Error fetching  a single product')
        throw err
    }
}

// insert product

const insertProduct = async(req, res)=>{
    let {prodName, price, prodDesc, image, category, quantity} = req.body

    try {
        await insertProductDb(prodName, price, prodDesc, image, category, quantity)
        res.status(200).json(await getProductDb())
        
    } catch (err) {
        res.status(500).send('Error inserting a product')
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
    let {prodName, quantity, price, category, image, prodDesc} = req.body
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

    try {
        await editProductDb(prodName, quantity, price, category, image, prodDesc, req.params.id)    
        res.status(200).send(await getProductsDb())
    } catch (error) {
        res.status(500).send('Error editing a product')
        throw err
    }
    

}


export {getProducts, getProduct, insertProduct, deleteProduct, editProduct}