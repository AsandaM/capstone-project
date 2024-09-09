import { pool } from '../config/config.js'

const getOrdersDb = async () => {
    let [data] = await pool.query('SELECT * FROM orders')
    return data
}

const getOrdersByUserDb = async (userID) => {
    let [data] = await pool.query(`SELECT  o.orderID, o.orderDate, o.totalPrice, oi.prodID, p.prodName, oi.quantity, p.price
                                    FROM orders o
                                    JOIN order_items oi ON o.orderID = oi.orderID
                                    JOIN products p ON oi.prodID = p.prodID
                                    WHERE o.userID = ?
                                    ORDER BY o.orderID;`, [userID])
                                return data
}

const insertOrdersDb = async (userID, email, phone, fullName, address, city, saveInfo, deliveryFee, totalPrice, orderDate) => {
    let [data] = await pool.query('INSERT INTO orders (userID, email, phone, fullName, address, city, saveInfo, deliveryFee, totalPrice, orderDate) VALUES (?,?,?,?,?,?,?,?,?,?)', [userID, email, phone, fullName, address, city, saveInfo, deliveryFee, totalPrice, orderDate])
    return data
}

const insertOrderItemsDb = async (orderID, prodID, quantity) => {
    let [data] = await pool.query('INSERT INTO order_items (orderID, prodID, quantity) VALUES (?,?,?)', [orderID, prodID, quantity])
    return data
}

const deleteOrdersDb = async (id) => {
    await pool.query('DELETE FROM orders WHERE orderID = ?', [id])
}

export { getOrdersDb, getOrdersByUserDb, insertOrdersDb, insertOrderItemsDb, deleteOrdersDb }
