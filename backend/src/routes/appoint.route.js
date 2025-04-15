import express from "express"
import { handleAppoint } from "../controller/appoint.controller.js";
const router = express.Router();

router.post('/appoint', handleAppoint )

export default router
