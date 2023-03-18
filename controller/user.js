var User=require('../model/user')
var jwt = require("jsonwebtoken");
const expressJwt = require('express-jwt');

exports.addUser=(req,res)=>{
    console.log(req.body)
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            return res.status(404).json({error:"Error in fetching email"})
        }
        else if(user){
            return res.status(404).json({error:"User already exist"})
        }
        else{
            let user=new User(req.body)
            user.save((err,newUser)=>{
                if(err){
                    return res.status(404).json({error:err})
                }
                else{
                    return res.status(201).json(newUser)
                }
            })
        }
        
    })
}

exports.login=(req,res)=>{
    
    console.log(req.body)

    User.findOne({email:req.body.email,password:req.body.password},(err,user)=>{
        if(err){
            return res.status(404).json({error:"Error in fetching email"})
        }
        else if(user){
             //create token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        //put token in cookie
        res.cookie("token", token, { expire: new Date() + 9999 });
        return res.status(201).json({ token,user});



        }
        else{
            return res.status(404).json({msg:"error"})
        }

    })
}



