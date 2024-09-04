import express from 'express';
import {getCart, getCartByUser, getCartByProduct, editCart, deleteCart, insertCart} from '../controller/cartController.js'
import { verifyAToken } from '../middleware/authenticate.js';

const router = express.Router()

router.get('/', getCart)
router.get('/:userID', verifyAToken, getCartByUser)
router.get('/product/:prodID', getCartByProduct)
router.post('/',verifyAToken, insertCart)
router.patch('/:id', editCart)
router.delete('/:id', deleteCart)

export default router