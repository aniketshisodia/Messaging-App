import mongoose, { mongo } from "mongoose";
import User from "./userModel";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        res: "User",
        require: true
    },
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        res: "User",
        require: true
    },
    message: {
        type: mongoose.Schema.Types.ObjectId,
        res: "User",
        require: true
    }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);
export default Message;