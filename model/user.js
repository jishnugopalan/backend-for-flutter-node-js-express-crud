var mongoose = require("mongoose");
var userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlegth:3,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true

    },
    password:{
        type:String,
        required:true
    },
    usertype:{
        type:String,
        default:'user'
    }

})

module.exports=mongoose.model("User",userSchema)