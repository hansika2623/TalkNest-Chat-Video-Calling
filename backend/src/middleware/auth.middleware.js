import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async(req,res,next)=>{
    try{
        const token = req.cookies.jwt;//To get the cookie

        if(!token){
            //if token is not found
            return res.status(401).json({message:"Unauthorized - No token provided"});
        }
        //if token is found first decode the token which we have encrypted using the same secret key -"JWT_SECRET_KEY" 
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY); 
        if(!decoded){
            //token is found but wrong that is it is invalid.
            return res.status(401).json({message:"Unauthorized - Invalid Token"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            //user is not available
            return res.status(401).json({message:"Unauthorized - User not found"});
        }
        req.user = user;
        next();
    }catch(error){
        console.log("Error in protecting middleware",error);
        res.status(401).json({message:"Internal server error"});
    }
}