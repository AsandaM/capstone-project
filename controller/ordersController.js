import { getOrdersDb, getOrdersByUserDb, insertOrdersDb, insertOrderItemsDb, deleteOrdersDb } from '../model/ordersDb.js'

// get all orders
const getOrders = async(req, res)=>{
    try{
        res.status(200).json(await getOrdersDb())
    } catch(err){
        res.status(500).send({message:'Error fetching orders'})
        throw err
        
    }
}

// get orders by user
const getOrdersByUser = async(req, res)=>{
    try {
        res.status(200).json(await getOrdersByUserDb(req.body.userID))
        
    } catch (err) {
        res.status(500).send({message:'Error fetching a users orders'})
        throw err
    }
}

// insert orders
const insertOrders = async(req, res)=>{
    let {userID} = req.body.userID
      let  {email, phone, fullName, address, city, saveInfo, deliveryFee, totalPrice, orderDate} = req.body
    try {
        await insertOrdersDb(userID, email, phone, fullName, address, city, saveInfo, deliveryFee, totalPrice, orderDate)
        res.status(200).json(await getOrdersDb())
        
    } catch (err) {
        res.status(500).send({message:'Error inserting a order'})
        throw err
        
    }
}

// insert order items
const insertOrderItems = async(req, res)=>{
    let {orderID, prodID, quantity} = req.body

    try {
        await insertOrderItemsDb(orderID, prodID, quantity)
        res.status(200).json(await getOrdersDb())
        
    } catch (err) {
        res.status(500).send({message:'Error inserting a order item'})
        throw err
        
    }
}

// delete orders
const deleteOrders = async(req, res)=>{
    try {
        await deleteOrdersDb(req.params.id)
        res.status(200).json(await getOrdersDb())
        
    } catch (err) {
        res.status(500).send({message:'Error deleting a order'})
        throw err
        
    }
}

export { getOrders, getOrdersByUser, insertOrders, insertOrderItems, deleteOrders }