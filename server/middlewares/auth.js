import jwt from 'jsonwebtoken'
import {useCredit} from '../controllers/userController.js'

const userAuth = async (req,res,next) =>{ 
    const {token} = req.headers;

    if(!token) {
        return res.json({success: false, message: "Not Authorized. Login Again"})
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);


        // Prevent crash if req.body is undefined
        if (!req.body) req.body = {};

        if(tokenDecode.id) {
            req.body.userId = tokenDecode.id;
        } else {
            return res.json({success: false, message: "Not Authorized. Login Again"})        
        }

        next();

    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export default userAuth;