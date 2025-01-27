import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (userId, res) => {
    if (!userId) {
        throw new Error("User ID is required to generate a token");
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d', // Token will be valid for 15 days
    });
    /* 
        A cookie is a small piece of data stored on the user's browser by the server. 
        It is sent along with every HTTP request to the server.
    */
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // Prevents client-side scripts from accessing the cookie
        sameSite: "strict", // Prevents CSRF attacks
    });
};

export default generateTokenAndSetCookies;