import {getCartDb, getCartByUserDb, getCartByProductDb, editCartDb, deleteCartDb, insertCartDb, deleteItemCartDb} from '../model/cartDb.js'
import { loginDb } from '../model/usersDb.js'

// get all cart
const getCart = async(req, res)=>{
    try{
        res.status(200).json(await getCartDb())
    } catch(err){
        res.status(500).send({err:'Error fetching cart'})
        throw err
        
    }
}

// get cart by user
const getCartByUser = async(req, res)=>{
    try {
        const user = await loginDb(req.user)

        res.status(200).json(await getCartByUserDb(user.userID))
        
    } catch (err) {
        res.status(500).send({err:'Error fetching a users cart'})
        throw err
    }
}

// get cart by product
const getCartByProduct = async(req, res)=>{
    try {
        res.status(200).json(await getCartByProductDb(req.params.prodID))
        
    } catch (err) {
        res.status(500).send({err:'Error fetching a single cart'})
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
        } else {
            // If the product does not exist, insert it into the cart
            await insertCartDb(userID, prodID, quantity);
        }

        // Return the updated cart
        res.status(200).json(await getCartByUserDb(userID));

    } catch (err) {
        res.status(500).send({err:'Error inserting/updating a cart'});
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
        res.status(500).send({err:'Error updating a cart'})
        throw err
        
    }
}

// delete cart
const deleteCart = async(req, res)=>{
    try {
        await deleteCartDb(req.body.userID)
        res.status(200).json(await getCartDb())
        
    } catch (err) {
        res.status(500).send({err:'Error deleting a cart'})
        throw err
    }
}

// delete item from cart
const deleteItemCart = async(req, res)=>{
    try {
        await deleteItemCartDb(req.body.userID, req.params.prodID)
        res.status(200).json(await getCartByUserDb(req.body.userID))
        
    } catch (err) {
        res.status(500).send({err:'Error deleting a item'})
        throw err
    }
}

export {getCart, getCartByUser, getCartByProduct, editCart, deleteCart, insertCart, deleteItemCart}