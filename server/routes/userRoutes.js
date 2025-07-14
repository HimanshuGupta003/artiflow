import express from 'express'
import {registerUser, loginUser, useCredit} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits',userAuth, useCredit)

export default userRouter