import express from "express";
import dotenv from "dotenv";
import { login, logout, signup } from "../controllers/authController.js";

const router = express.Router();
dotenv.config();
const PORT = process.env.PORT || 5000;


router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);

export default router;