import {pool} from '../config/config.js'

const getCartDb = async()=>{
    let [data] = await pool.query('SELECT * FROM cart')
    return data
}

const getCartByUserDb = async(userID)=>{
    let [data] = await pool.query('SELECT * FROM cart WHERE userID = ?', [userID])
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

const editCArtDb = async(quantity, id)=>{
    await pool.query('UPDATE cart SET quantity = ? WHERE cartID = ?', [quantity, id])
}

const deleteCartDb = async(id)=>{
    await pool.query('DELETE FROM cart WHERE cartID = ?', [id])
}

export {getCartDb, getCartByUserDb, getCartByProductDb, editCArtDb, deleteCartDb, insertCartDb}