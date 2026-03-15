
import jwt, { decode } from 'jsonwebtoken';
export const protect=(req,res,next)=>{
    const header=req.headers.authorization;
    if(!header){
        return res.status(401).json({
            message:"NO token provided"
        })
    }
    const token=header.split(" ")[1];
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.userId=decoded.id;
        next();
    } catch (error) {
        res.status(401).json({
            message:"Invalid Token"
        })
    }
}