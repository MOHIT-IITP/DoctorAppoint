import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const connectToDatabase = async() => {
    try {
        const connection = await mongoose
            .connect(process.env.MONGO_URI)
            .then(()=>{console.log("Mongodb connected successfully")})
            .catch(()=>{console.log("Error in Mongodb connection")})
        console.log(connection)
    } catch (error) {
        console.log("Error in connectToDatabase controller")
    }
}
