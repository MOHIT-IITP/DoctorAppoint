import { AdminLogin } from "../models/admin.controller.js";
import express from "express"
const router = express.Router(); 

router.post("/login", AdminLogin);

export default router;
