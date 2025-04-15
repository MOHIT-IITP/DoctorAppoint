import express from "express";
import { doctorLogin, doctorRegister } from "../controller/doctor.controller.js";

const router = express.Router();

router.post("/doctorRegister", doctorRegister);
router.post("/doctorLogin", doctorLogin);

export default router;
