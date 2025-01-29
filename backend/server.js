import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import connectToMongoDB from "./database/connectToMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());
// to parse the incoming request with JSON payloads


// test route

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.listen(5000, () => {
    connectToMongoDB();
    console.log("Server is running at port - 5000");
})