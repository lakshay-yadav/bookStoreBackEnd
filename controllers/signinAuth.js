const User = require('../models/user.js')

const signinAuth = async (req,res)=>{
    const data = req.body
    console.log(data)
    console.log("Inside post signin")
    
    try{
        const user = await User.find(data)
        console.log(user)
        if(user.length){
            res.status(200).json({status:"OK",user})
        }
        else{
            res.status(404).json({status:"User not found"})
        }
    }
    catch (err){
        console.log("Error occurred");
        res.status(400).json([{status:"Error",error:err}]);
    }
}

module.exports = {signinAuth}