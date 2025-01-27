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

        // console.log("Saved User:", newUser);

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

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");


        if (!user || !isPasswordCorrect) {
            console.log(username, password, user);
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookies(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });
    }
    catch (error) {
        console.log("Error in login controller", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        /*
        "jwt": The name of the cookie you want to clear.
        "": The empty string sets the cookie's value to nothing (or clears its value).
        { maxAge: 0 }: This sets the cookie's expiration time to 0 milliseconds from now, effectively making it expire immediately.
         */
        res.status(200).json({
            message: "Logout successfully"
        });
    }
    catch (error) {
        console.log("Error in logout controller", error); // DEV
        res.status(500).json({ error: "Internal server Error" }); // PROD
    }
};

