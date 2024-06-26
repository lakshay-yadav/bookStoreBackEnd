const User  = require("../models/user.js")

const profileData = async (req,res)=>{
    const data = req.body
    console.log("Inside profile data");
    console.log(data);

    try{
        const user = await User.find({email:data.email})
        console.log(user[0])
        res.status(200).json(user[0])
    }
    catch(err){
        res.status(500).json({status:"Error Occurred",error:err});
    }
}

const detail_change = async (req,res)=>{
    const data = req.body
    console.log(data);
    console.log("Inside post profile detail change route");

    try{
        await User.findOneAndUpdate({email:data.email},{
            name:data.name,
            lastName:data.lastName,
            gender:data.gender,
            phoneNumber:data.phoneNumber
        })

        res.status(200).json({status:"OK"})
    }
    catch(err){
        res.status(500).json({status:"Error Occurred",error:err})
    }
}

const password_change = async (req,res)=>{
    const data = req.body
    console.log("Inside profile password change");
    console.log(data);

    try{
        await User.findOneAndReplace({email:data.email},{
            password:data.password
        })
        res.status(200).json({status:"OK"})
    }
    catch(err){
        res.status(500).json({status:"Error Occurred",error:err})
    }
}

const order_history = async (req,res)=>{
    const data = req.body
    console.log("Inside profile order history");
    console.log(data);

    try{
        
        res.status(200).json({status:"OK"})
    }
    catch(err){
        res.status(500).json({status:"Error Occurred",error:err})
    }
}

const queries = async (req,res)=>{
    const data = req.body
    console.log("Inside profile order history");
    console.log(data);

    try{
        const user = await User.find({email:data.email});
        console.log(user[0].query)
        // if(user[0].query.length)
        res.status(200).json({status:"OK",queries:user[0].query})
    }
    catch(err){
        res.status(500).json({status:"Error Occurred",error:err})
    }
}

module.exports = {detail_change,password_change,profileData,order_history,queries}

