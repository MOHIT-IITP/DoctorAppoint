import { genAuthToken } from "../lib/jwtVerify.js";
import User from "./auth.model.js";
import bcrypt from "bcryptjs"

export const AdminLogin = async(req, res) => {
    try {
        const {email , password} = req.body;

        if(!email || !password) {
            return res.status(400).json({error: "All fields are required"});
        }

        const user = await User.findOne({email});
        // authenticate the admin first then password
        
        if(!user){
            return res.status(400).json({error: "Invalid Credentials"});
        }

        if(user.role !== "admin") {
            return res.status(400).json({error: "Invalid Credential"});
        }

        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid) {
            return res.status(400).json({error:  "Invalid Credential"});
        }

        genAuthToken(user._id, res);

        res.status(200).json({
            id: user._id,
            fullName: user.fullName,
            email: user.email,
        })
    } catch (error) {
        console.log("Error in admin controller");
        res.status(500).json({message: "Internal server error"});
    }
}
