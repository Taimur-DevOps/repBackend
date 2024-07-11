import express from 'express';
import { validateUserSignUp, userValidation, validateUserSignIn } from '../middlewares/validations/user.js';
import { createUser, userSignIn } from '../controllers/UserController.js';
import { isAuth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/create-user', validateUserSignUp, userValidation, createUser);
router.post("/sign-in", validateUserSignIn, userValidation, userSignIn);
router.get('/create-post', isAuth, (req, resp) => {
    resp.json("You are in create post route");
});


export default router;
