import { genAuthToken } from "../lib/jwtVerify.js";
import Doctor from "../models/doctor.model.js";
import bcrypt from "bcryptjs";

export const doctorLogin = async (req, res) => {
    try {
        const {email , password } = req.body;

        if(!email || !password) {
            return res.status(400).json({message: "All field are required"});
        }
        
        // finding doctor by their email
        const user = await  Doctor.findOne({email});

        if(!user){
            return res.status(400).json({error: "Credential error"});
        }

        const isvalid = await bcrypt.compare(password, user.password);
        if(!isvalid){
            return res.status(400).json({error: "Credential error"});
        }

        genAuthToken(user._id, res);

        // replace the below with the res.status(200).json({message: "doctor logined successfully"})
        res.status(200).json({
            id: user._id,
            email: user.email,
            password: user.password,
        })
    } catch (error) {
        console.log("Error in doctor login controller")
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const doctorRegister = async(req, res) => {
    try {
        const {fullname, email, password, education, gender, speciality, fee} = req.body;
        
        if(!fullname || !email || !password || !education || !gender || !speciality || !fee){
            return res.status(400).json({message: "All fields are required"});
        }

        const user = await Doctor.findOne({email});

        if(user){
            return res.status(400).json({message: "Doctor Already Present"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const newDoctor = new Doctor({
            fullname,
            email,
            password: hashedPass,
            education,
            gender,
            speciality,
            fee,
        })

        await newDoctor.save();
        genAuthToken(newDoctor._id, res);

        res.status(201).json({
            id: newDoctor._id,
            fullname: newDoctor.fullname,
            email: newDoctor.email,
        })
    } catch (error) {
        console.log("Error in Doctor register controller")
        res.status(500).json({error: "Internal server error"})
    }
}
