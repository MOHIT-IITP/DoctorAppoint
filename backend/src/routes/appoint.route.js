import express from "express"
import { handleAppoint } from "../controller/appoint.controller.js";
const router = express.Router();

router.post('/appoint/:id', handleAppoint )

export default router
