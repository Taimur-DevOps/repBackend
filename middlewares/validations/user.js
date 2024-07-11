import { check, validationResult } from 'express-validator';

export const validateUserSignUp = [
    check('fullName').trim().not().isEmpty().isLength({min: 3, max: 20})
        .withMessage("Name must be within 3 to 20 characters"),
    check('email').normalizeEmail().isEmail().withMessage("Invalid Email"),
    check('password').trim().not().isEmpty()
        .withMessage("Password is Empty")
        .isLength({min: 8, max: 20})
        .withMessage('Password Must be 8 to 20 characters long'),
    check('phoneNo').trim().not().isEmpty().matches(/^\+\d{10,14}$/)
        .withMessage('Mobile number must be in international format +XXXXXXXXXXX'),
    check('confirmPassword').trim().not().isEmpty().custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Both passwords must be the same!");
        }
        return true;
    })
];

export const userValidation = (req, resp, next) => {
    const errors = validationResult(req).array();
    if (!errors.length) return next();

    const error = errors[0].msg;
    resp.json({ success: false, message: error });
};

export const validateUserSignIn = [
    check('email').trim().isEmail().withMessage("Email/password is required! "),
    check('password').trim().not().isEmpty().withMessage("Email/password is required! ")
];
