import express from 'express';
import {getCart, getCartByUser, getCartByProduct, editCart, deleteCart, insertCart} from '../controller/cartController.js'

const router = express.Router()

router.get('/', getCart)
router.get('/:userID', getCartByUser)
router.get('/product/:prodID', getCartByProduct)
router.post('/', insertCart)
router.patch('/:id', editCart)
router.delete('/:id', deleteCart)

export default router