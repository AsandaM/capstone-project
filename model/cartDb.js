import {pool} from '../config/config.js'

const getCartDb = async()=>{
    let [data] = await pool.query('SELECT * FROM cart')
    return data
}

const getCartByUserDb = async(userID)=>{
    let [data] = await pool.query(`select c.cartID, c.prodID, p.prodName, p.price, p.image, c.quantity
                                        from cart c
                                        join 
                                        products p on c.prodID = p.prodID
                                        where c.userID = ?
                                        order by c.cartID;`, [userID])
    return data
}

const insertCartDb = async(userID, prodID, quantity)=>{
    let [data] = await pool.query('INSERT INTO cart (userID, prodID, quantity) VALUES (?,?,?)', [userID, prodID, quantity])
    return data
}

const getCartByProductDb = async(prodID)=>{
    let [data] = await pool.query('SELECT * FROM cart WHERE prodID = ?', [prodID])
    return data
}

const editCartDb = async(quantity, id)=>{
    await pool.query('UPDATE cart SET quantity = ? WHERE prodID = ?', [quantity, id])
}

const deleteCartDb = async(id)=>{
    await pool.query('DELETE FROM cart WHERE userID = ?', [id])
}

const deleteItemCartDb = async(userID, prodID)=>{
    await pool.query('DELETE FROM cart WHERE userID = ? AND prodID = ?', [userID, prodID])
}

export {getCartDb, getCartByUserDb, getCartByProductDb, editCartDb, deleteCartDb, insertCartDb, deleteItemCartDb}