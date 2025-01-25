import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateTokenAndSetCookies from "../utils/generateToken.js";
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Generate profile picture URL
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create new user
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        // Save user to database
        await newUser.save();
        console.log("Saved User:", newUser);

        // Generate token and set cookies
        await generateTokenAndSetCookies(newUser._id, res);

        // Respond with user data
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });
    } catch (err) {
        console.error("Error in signup controller:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const login = (req, res) => {
    console.log("loginUser")
}


export const logout = (req, res) => {
    console.log("loginUser")
}

