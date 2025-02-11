import User from "../models/userModel.js";

export const getUserForSideBar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        // all the users will appear on the side bar
        // except the person who is sending the message

        res.status(200).json(filteredUsers);

    }
    catch {
        res.status(500).json({ error: "Internal Server error" });
    }
}