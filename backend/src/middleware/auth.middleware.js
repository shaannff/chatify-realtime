import jwt  from "jsonwebtoken"
import User from "../models/users.model.js"
import { ENV } from "../lib/env.js"

export const protectRoute = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt
        if(!token) res.status(401).json({message:"Unauthorized - No token provided"})
            
        const decode = jwt.verify(token,ENV.JWT_SECRET)
        if(!decode) res.status(401).json({message:"Unauthorized - Invalid provided"})

        const user = await User.findById(decode.userId)
        if(!user)res.status(404).json({message:" User not found"})
        
        req.user = user
        next()


    } catch (error) {
        console.log("Error in protectRoute middleware :",error);
        res.status(500).json({message:"Internal server error"})
    }
}