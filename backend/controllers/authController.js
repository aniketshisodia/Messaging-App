import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            res.status(400).json({ error: "Passwords Dont match" });
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User already exist" });
        }

        // hash password here 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // https://avatar.iran.liara.run/public/boy?username=[value]
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            confirmPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });
        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });
    }
    catch (err) {
        console.log("Error in signup controller", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const login = (req, res) => {
    console.log("loginUser")
}


export const logout = (req, res) => {
    console.log("loginUser")
}

