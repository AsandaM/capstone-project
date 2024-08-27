import express from 'express'
import { getUsers, getUser, insertUser, deleteUser, editUser, loginUser } from '../controller/usersController.js'
import { checkUser, emailCheck } from '../middleware/authenticate.js'

const router = express.Router()
router.get('/', getUsers)
router.post('/signup', insertUser)

router.post('/login', emailCheck, checkUser, loginUser)

router
    .route('/:id')
        .get(getUser)
        .delete(deleteUser)
        .patch(editUser)

export default router