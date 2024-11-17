 import jwt from 'jsonwebtoken';

 const authUser = async (req,res,next)=>{
    const {token} = req.headers;
    if(!token) return res.status(401).json({status:401,message:'Unauthorized'});
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
     
       req.body.userId = token_decode.id;
        next();
    } catch (error) {
        return res.status(401).json({status:401,message:'Unauthorized'});
    }

 }
    export default authUser;