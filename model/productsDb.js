import {pool} from '../config/config.js'

// get all

const getProductsDb = async()=>{
    let [data] = await pool.query('SELECT * FROM products')
    return data
}

// get single

const getProductDb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM products WHERE prodID = ?', [id])
    return data
}

// delete
const deleteProductDb = async(id)=>{
    await pool.query('DELETE FROM products WHERE prodID = ?', [id])
}

// insert

const insertProductDb = async(prodName, price, prodDesc, image, category, quantity)=>{
    let [data] = await pool.query(`INSERT INTO products (prodName, price, prodDesc, image, category, quantity) VALUES (?,?,?,?,?,?)`, [prodName, price, prodDesc, image, category, quantity])
    return data
}

// update

const editProductDb = async(prodName, quantity, price, category, image, prodDesc, id)=>{
    await pool.query(`UPDATE products 
        SET prodName = ?, quantity = ?, price = ?, category = ?, image = ?, prodDesc = ?
        WHERE prodID = ?`, [prodName, quantity, price, category, image, prodDesc, id])
}

export {getProductsDb, getProductDb, deleteProductDb, insertProductDb, editProductDb}