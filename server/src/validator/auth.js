const {check, validationResult}= require('express-validator');
exports.validateSignupRequest = [
    check("firstName").notEmpty().withMessage("firstName is rqquired"),
    check("lastName").notEmpty().withMessage("lastName is rqquired"),
    check("email").isEmail().withMessage("Enter valid email"),
    check("password").isLength({ min: 6 }).withMessage("password must be of minimum 6 character")
];
exports.validateSigninRequest = [
    check("email").isEmail().withMessage("Enter valid email"),
    check("password").isLength({ min: 6 }).withMessage("password must be of minimum 6 character")
];

exports.isRequestValidated=(req,res,next)=>{
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({error : errors.array()[0].msg})
    }
    next();
};