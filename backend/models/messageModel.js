import mongoose from "mongoose";
import User from "./userModel.js";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Correctly referencing the User model
            required: true, // Fixed typo: 'require' -> 'required'
        },
        receiverId: { // Fixed typo: 'recieverId' -> 'receiverId'
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Correctly referencing the User model
            required: true,
        },
        message: {
            type: String, // Assuming this is the actual message content
            required: true, // Fixed typo: 'require' -> 'required'
        },
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
