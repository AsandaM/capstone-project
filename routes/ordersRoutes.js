import express from 'express';
import { getOrders, getOrdersByUser, insertOrders, deleteOrders } from '../controller/ordersController.js'
import { verifyAToken } from '../middleware/authenticate.js';

const router = express.Router()

router.get('/', getOrders)
router.get('/:userID', verifyAToken, getOrdersByUser)
router.post('/',verifyAToken, insertOrders)
router.delete('/:id', deleteOrders)

export default router