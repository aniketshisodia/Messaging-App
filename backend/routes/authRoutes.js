import express from "express";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();
const PORT = process.env.PORT || 5000;


// test route
router.get('/login', (req, res) => {
    res.send('Login Route');
});

export default router;