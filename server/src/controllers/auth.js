const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup=(req,res)=>{

    User.findOne({email:req.body.email})
    .then((user)=>{
        if(user){
            return res.status(400).json({
                message:"User already existed!!"
            });
        }
        const{
            firstName,
            lastName,
            email,
            password
        }=req.body;

        const _user=new User({
            firstName,
            lastName,
            email,
            password,
            userName:(Math.random()*100).toString()
        });

        _user.save().then((data)=>{
            if(data){
                return res.status(201).json({
                    message:"!! User Created Sucessfully !!"
                });
            }
        }).catch((error)=>{
                return res.status(400).json({
                    message:error
                });
        });
        }
    ).catch((error)=>{
        return res.status(400).json({
            message:error
        });
    });
};


exports.signin=(req,res)=>{
    User.findOne({email:req.body.email})
    .then((user)=>{
        if(user){
            if(user.authenticate(req.body.password)){
                const token=jwt.sign({_id:user._id, role:user.role},process.env.JWT_KEY,{expiresIn:"2h"});
                const {_id,firstName,lastName,email,role,fullName}=user;
                return res.status(200).json({
                    token,
                    user:{_id,firstName,lastName,email,role,fullName}
                });
            }
            else{
                return res.status(400).json({
                    message:"Wrong Password!!"
                })
            }
        }
        else{
            return res.status(400).json({message:"Something Went Wrong!!"});
        }
    });
};