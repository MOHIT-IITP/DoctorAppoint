import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import { connectToDatabase } from "./utils/connectDb.js";
import AuthRouter from "./routes/auth.route.js";
import DoctorRouter from "./routes/doctor.route.js"
import AppointRouter from "./routes/appoint.route.js"
import AdminRouter from "./routes/admin.route.js"

dotenv.config()
const PORT = process.env.PORT || 5000;

// keep all the use thing here
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true,
    }),
);

// connection to database
connectToDatabase();

app.use("/auth", AuthRouter);
app.use("/doctor" , DoctorRouter);
app.use('/', AppointRouter);
app.use('/admin', AdminRouter);

// after you complete backend then delete this get route
app.get("/", (req, res) => {
    res.json("Server is running");
});

app.listen(PORT, (req, res) => console.log(`Server is running on ${PORT}`));
