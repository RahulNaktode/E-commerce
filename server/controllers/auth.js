import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const postSignUp = async (req, res) => {
    const { name, email, mobile, password } = req.body;

    if(!name){
        return res.json({
            success: false,
            message: "Name is required",
            data: null
        })
    }

    if(!email){
        return res.json({
            success: false,
            message: "Email is required",
            data: null
        })
    }

    if(!password){
        return res.json({
            success: false,
            message: "Password is required",
            data: null
        })
    }

    const salt = await bcrypt.genSaltSync(10);
    const encryptedPassword = await bcrypt.hashSync(password, salt);

    const existingUser = await User.findOne({ email });

    if(existingUser){
        return res.json({
            success: false,
            message: "User already exists with this email",
            data: null
        })
    }

    const newUser = new User({
        name,
        email,
        mobile,
        password: encryptedPassword
    })

    try{
        const savedUser = await newUser.save();

        return res.json({
            success: true,
            message: "User registered successfully",
            data: savedUser
        })
    } catch (error) {
        return res.json({
            success: false,
            message: `User register failed: ${error.message}`,
            data: null
        })

    }
}

const postLogin = async (req, res) => {
    const { email, password } = req.body;

    if(!email){
        return res.json({
            success: false,
            message: "Email is required",
            data: null
        })
    }

    if(!password){
        return res.json({
            success: false,
            message: "Password is required",
            data: null
        })
    }

    const existingUser = await User.findOne({ email });

    if(!existingUser){
        return res.json({
            success: false,
            message: "User not found with this email",
            data: null
        })
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

    existingUser.password = undefined;

    const jwtToken = jwt.sign({
        id: existingUser._id,
        email: existingUser.email
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "1d"
    }
    );

    if(isPasswordCorrect){
        return res.json({
            success: true,
            message: "User logged in successfully",
            data: existingUser,
            jwtToken: jwtToken
        })
    } else {
        return res.json({
            success: false,
            message: "Incorrect password",
            data: null
        })
    }

}

export { postSignUp, postLogin }