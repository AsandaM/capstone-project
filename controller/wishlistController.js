import {getWishlistDb, getWishlistByUserDb, getWishlistByProductDb, editWishlistDb, deleteWishlistDb, insertWishlistDb, deleteItemWishlistDb} from '../model/wishlistDb.js'
import { loginDb } from '../model/usersDb.js'
// get all wishlist
const getWishlist = async(req, res)=>{
    try{
        res.status(200).json(await getWishlistDb())
    } catch(err){
        res.status(500).send({message:'Error fetching wishlist'})
        throw err
        
    }
}

// get wishlist by user
const getWishlistByUser = async(req, res)=>{
    try {
        const user = await loginDb(req.user)

        res.status(200).json(await getWishlistByUserDb(user.userID))
        
    } catch (err) {
        res.status(500).send({message:'Error fetching a single wishlist'})
        throw err
    }
}

// get wishlist by product
const getWishlistByProduct = async(req, res)=>{
    try {
        res.status(200).json(await getWishlistByProductDb(req.params.prodID))
        
    } catch (err) {
        res.status(500).send({message:'Error fetching a single wishlist'})
        throw err
    }
}

// insert wishlist
const insertWishlist = async(req, res) => {
    let {userID, prodID, quantity} = req.body;
    if (!quantity) {
        quantity = 1;
    }

    try {
        // Check if the product is already in the wishlist for this user
        const wishlistItems = await getWishlistByUserDb(userID);
        const existingProduct = wishlistItems.find(item => item.prodID === prodID);

        if (existingProduct) {
            // If the product exists, increment the quantity
            const newQuantity = existingProduct.quantity + quantity;
            await editWishlistDb(newQuantity, existingProduct.prodID);
        } else {
            // If the product does not exist, insert it into the wishlist
            await insertWishlistDb(userID, prodID, quantity);
        }

        // Return the updated wishlist
        res.status(200).json(await getWishlistByUserDb(userID));
    } catch (err) {
        res.status(500).send({message:'Error inserting into wishlist'})
        throw err
    }
}

// edit wishlist
const editWishlist = async(req, res) => {
    const {quantity} = req.body;
    try {
        await editWishlistDb(quantity, req.params.id);
        res.status(200).json(await getWishlistDb());
    } catch (err) {
        res.status(500).send({message:'Error editing a wishlist'})
        throw err
    }
}

// delete wishlist
const deleteWishlist = async(req, res)=>{
    try {
        await deleteWishlistDb(req.params.id)
        res.status(200).json(await getWishlistDb())
        
    } catch (err) {
        res.status(500).send({message:'Error deleting a wishlist'})
        throw err
        
    }
}

// delete item wishlist
const deleteItemWishlist = async(req, res)=>{
    try {
        await deleteItemWishlistDb(req.body.userID, req.params.prodID)
        res.status(200).json(await getWishlistByUserDb(req.body.userID))
        
    } catch (err) {
        res.status(500).send({message:'Error deleting an item from wishlist'})
        throw err
        
    }
}

export {getWishlist, getWishlistByUser, getWishlistByProduct, editWishlist, deleteWishlist, insertWishlist, deleteItemWishlist}