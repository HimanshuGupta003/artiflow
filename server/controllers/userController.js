import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt' //to encrypt the password
import jwt from 'jsonwebtoken' //for user authentication


// for sign in
const registerUser = async (req,res)=> {
    try{
        const{name, email, password} = req.body;

        if(!name || !email || !password) {
            return res.json({success:false, message: 'Missing Details'})
        }

        const salt = await bcrypt.genSalt(10) //10 is for moderate
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name, email, password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id: user._id},process.env.JWT_SECRET) // generate token that can send in the response 

        res.json({success: true, token, user: {name: user.name}})

    } catch(error){
        console.log(error)
        res.json({success: false, message: error.message})

    }
}

// for login
const loginUser = async(req,res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email})

        if(!user) {
            return res.json({success:false, message: 'User does not exist'})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch) {
            const token = jwt.sign({id: user._id},process.env.JWT_SECRET) // generate token that can send in the response 
            res.json({success: true, token, user: {name: user.name}})
        } else {
            return res.json({success:false, message: 'Invalid credential'})
        }
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// for credit
const useCredit = async(req,res)=> {
    try {
        const{userId} = req.body;

        const user = await userModel.findById(userId);
        res.json({success: true, credits: user.creditBalance, user: {name: user.name}})
    } catch (error) {
        
    }
}

export {registerUser, loginUser, useCredit} 