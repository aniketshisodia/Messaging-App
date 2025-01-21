import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


// test route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use("   ", authRoutes);

app.listen(5000, () => {
    console.log("Server is running at port - 5000");
})