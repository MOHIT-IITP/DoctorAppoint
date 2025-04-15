import express from "express";
import {
  checkAuth,
  Login,
  Logout,
  Register,
} from "../controller/auth.controller.js";
import { protectRoute } from "../lib/protectRoute.js";
const router = express.Router();

router.post("/signup",   Register);
router.post("/login",  Login);
router.post("/logout", Logout);
router.get('/check', protectRoute, checkAuth)

export default router;
