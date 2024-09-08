import {pool} from '../config/config.js'

const getWishlistDb = async()=>{
    let [data] = await pool.query('SELECT * FROM wishlist')
    return data
}

const getWishlistByUserDb = async(userID)=>{
    let [data] = await pool.query(`select w.wishlistID, w.prodID, p.prodName, p.price, p.image, w.quantity
                                    from wishlist w
                                    join 
                                    products p on w.prodID = p.prodID
                                    where w.userID = ?
                                    order by w.wishlistID;`, [userID])
    return data
}

const insertWishlistDb = async(userID, prodID, quantity)=>{
    let [data] = await pool.query('INSERT INTO wishlist (userID, prodID, quantity) VALUES (?,?,?)', [userID, prodID, quantity])
    return data
}

const getWishlistByProductDb = async(prodID)=>{
    let [data] = await pool.query('SELECT * FROM wishlist WHERE prodID = ?', [prodID])
    return data
}

const editWishlistDb = async(quantity, id)=>{
    await pool.query('UPDATE wishlist SET quantity = ? WHERE prodID = ?', [quantity, id])
}

const deleteWishlistDb = async(id)=>{
    await pool.query('DELETE FROM wishlist WHERE wishlistID = ?', [id])
}

const deleteItemWishlistDb = async(userID, prodID)=>{
    await pool.query('DELETE FROM wishlist WHERE userID = ? AND prodID = ?', [userID, prodID])
}

export {getWishlistDb, getWishlistByUserDb, getWishlistByProductDb, editWishlistDb, deleteWishlistDb, insertWishlistDb, deleteItemWishlistDb}