import {getCartDb, getCartByUserDb, getCartByProductDb, editCartDb, deleteCartDb, insertCartDb} from '../model/cartDb.js'
import { loginDb } from '../model/usersDb.js'

// get all cart
const getCart = async(req, res)=>{
    try{
        res.status(200).json(await getCartDb())
    } catch(err){
        res.status(500).send({message:'Error fetching cart'})
        throw err
        
    }
}

// get cart by user
const getCartByUser = async(req, res)=>{
    try {
        const user = await loginDb(req.user)

        res.status(200).json(await getCartByUserDb(user.userID))
        
    } catch (err) {
        res.status(500).send({message:'Error fetching a single cart'})
        throw err
    }
}

// get cart by product
const getCartByProduct = async(req, res)=>{
    try {
        res.status(200).json(await getCartByProductDb(req.params.prodID))
        
    } catch (err) {
        res.status(500).send({message:'Error fetching a single cart'})
        throw err
    }
}

// insert cart
const insertCart = async(req, res) => {
    let {userID, prodID, quantity} = req.body;
    if (!quantity) {
        quantity = 1;
    }

    try {
        // Check if the product is already in the cart for this user
        const cartItems = await getCartByUserDb(userID);
        const existingProduct = cartItems.find(item => item.prodID === prodID);

        if (existingProduct) {
            // If the product exists, increment the quantity
            const newQuantity = existingProduct.quantity + quantity;
            await editCartDb(newQuantity, existingProduct.prodID);
            console.log(`Incremented product quantity: ${existingProduct.prodID} to ${newQuantity}`);
        } else {
            // If the product does not exist, insert it into the cart
            await insertCartDb(userID, prodID, quantity);
            console.log(`Inserted new product: ${prodID} for user: ${userID}`);
        }

        // Return the updated cart
        res.status(200).json(await getCartByUserDb(userID));

    } catch (err) {
        res.status(500).send('Error inserting/updating a cart');
        console.error('Error:', err);
        throw err;
    }
}



// edit cart
const editCart = async(req, res)=>{
    let {quantity} = req.body

    try {
        await editCartDb(quantity, req.params.id)
        res.status(200).json(await getCartDb())
        
    } catch (err) {
        res.status(500).send('Error updating a cart')
        throw err
        
    }
}

// delete cart
const deleteCart = async(req, res)=>{
    try {
        await deleteCartDb(req.params.id)
        res.status(200).json(await getCartDb())
        
    } catch (err) {
        res.status(500).send('Error deleting a cart')
        throw err
    }
}

export {getCart, getCartByUser, getCartByProduct, editCart, deleteCart, insertCart}