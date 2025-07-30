import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


//user registration
export const register = async (req,res)=>{
    try{
        // Check if request body contains required fields
        if (!req.body.username || !req.body.email || !req.body.password) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields. Please provide username, email, and password."
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ 
            $or: [
                { email: req.body.email },
                { username: req.body.username }
            ]
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email or username already exists."
            });
        }

        //hashing password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
      
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo,
        });

        await newUser.save();
        res.status(200).json({ success:true, message: "Successfully created."});
    }catch(err){
        console.error('Registration error:', err);
        res.status(500).json({ 
            success: false, 
            message: "Failed to create. Try again.",
            error: err.message
        });
    }
};


//user login
export const login = async (req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide both email and password'
            });
        }

        const user = await User.findOne({email})

        //if user doesn't exist
        if(!user){
            return res.status(404).json({success:false, message: 'User not found'})
        }

        //if user exists then check the password
        const checkCorrectPassword = await bcrypt.compare(password, user.password)

        //if password is incorrect
        if(!checkCorrectPassword){
            return res.status(401).json({success:false, message: 'Incorrect email or password'})
        }

        const {password: userPassword, role, ...rest} = user._doc;

        if (!process.env.JWT_SECRET_KEY) {
            console.error('JWT_SECRET_KEY is not defined in environment variables');
            return res.status(500).json({success:false, message: 'Server configuration error'});
        }

        //create jwt token
        const token = jwt.sign(
            {id: user._id, role:user.role},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "15d"}
        );

        //set token in cookie
        res
        .cookie("accessToken", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days
        })
        .status(200)
        .json({
            success: true,
            message: 'Successfully logged in',
            token,
            data: { ...rest},
            role,
        });
    }catch(err){
        console.error('Login error:', err);
        return res.status(500).json({
            success: false, 
            message: 'Failed to login',
            error: err.message
        });
    }
};