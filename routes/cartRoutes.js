import express from 'express';
import {getCart, getCartByUser, getCartByProduct, editCart, deleteCart, insertCart, deleteItemCart} from '../controller/cartController.js'
import { verifyAToken } from '../middleware/authenticate.js';

const router = express.Router()

router.get('/', getCart)
router.get('/:userID', verifyAToken, getCartByUser)
router.get('/product/:prodID', getCartByProduct)
router.post('/',verifyAToken, insertCart)
router.patch('/:id', editCart)
router.delete('/:id', deleteCart)
router.delete('/:userID/:prodID', verifyAToken , deleteItemCart)

export default router