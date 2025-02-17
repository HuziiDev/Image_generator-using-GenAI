import express from 'express'
import {registerUser, loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js';
const userRouter = express.Router()
// Route for user registration
userRouter.post('/register', registerUser);

// Route for user login
userRouter.post('/login', loginUser);
userRouter.get('/credits', userAuth, userCredits)


export default userRouter