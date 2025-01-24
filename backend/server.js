import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from "./database/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
// to parse the incoming request with JSON payloads


// test route

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    connectToMongoDB();
    console.log("Server is running at port - 5000");
})