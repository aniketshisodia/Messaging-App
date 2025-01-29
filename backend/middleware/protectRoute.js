// Importing necessary modules and the User model
import jwt, { decode } from "jsonwebtoken"; // For handling JSON Web Tokens (JWT)
import User from "../models/userModel.js"; // Importing the User model for database queries

// Middleware function to protect routes by verifying user authentication
export const protectRoute = async (req, res, next) => {
    try {
        // Extract the token from the cookies
        const token = req.cookies.jwt;

        // If no token is provided, respond with an unauthorized error
        if (!token) {
            return res.status(401).json({ error: "Unauthorized- no token is provided" });
        }

        // Verify the token using the secret key from the environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // If token verification fails, respond with an unauthorized error
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized- no token is provided" });
        }

        // Find the user in the database by their ID (decoded from the token)
        // Exclude the password field from the retrieved user document
        const user = await User.findById(decoded.userId).select("-password");

        // If the user is not found in the database, respond with a not found error
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Attach the authenticated user information to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Log the error message for debugging purposes
        console.log("Error in protect route middleware", error.message);

        // Respond with an internal server error in case of exceptions
        res.status(500).json({ error: "Internal Server error" });
    }
};