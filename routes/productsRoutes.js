import express from 'express'
import { getProducts, getProduct, insertProduct, deleteProduct, editProduct} from '../controller/productsController.js'

const router = express.Router()

router.get('/',  getProducts)
router.post('/', insertProduct)

router
    .route('/:id')
        .get(getProduct)
        .delete(deleteProduct)
        .patch(editProduct)

export default router