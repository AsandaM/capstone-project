import express from 'express';
import {getWishlist, getWishlistByUser, getWishlistByProduct, editWishlist, deleteWishlist, insertWishlist, deleteItemWishlist} from '../controller/wishlistController.js'
import { verifyAToken } from '../middleware/authenticate.js';

const router = express.Router()

router.get('/', getWishlist)
router.get('/:userID', verifyAToken, getWishlistByUser)
router.get('/product/:prodID', getWishlistByProduct)
router.post('/',verifyAToken, insertWishlist)
router.patch('/:id', editWishlist)
router.delete('/:id', deleteWishlist)
router.delete('/:userID/:prodID', deleteItemWishlist)

export default router