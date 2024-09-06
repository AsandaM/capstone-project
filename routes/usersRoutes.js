import express from 'express'
import { getUsers, getUser, insertUser, deleteUser, editUser, loginUser, fetchUser, updatePassword } from '../controller/usersController.js'
import { checkUser, emailCheck, verifyAToken } from '../middleware/authenticate.js'

const router = express.Router()
router.get('/', getUsers)
router.post('/signup', insertUser)

router.post('/login', emailCheck, checkUser, loginUser)
router.get('/profile', verifyAToken, fetchUser )
router.patch('/updatepassword', updatePassword)

router
    .route('/:id')
        .get(getUser)
        .delete(deleteUser)
        .patch(editUser)

export default router