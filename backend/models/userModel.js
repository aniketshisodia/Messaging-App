import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String
    },
    profilePic: {
        type: String,
        default: " "
    }
});

const User = mongoose.model("User", userSchema);
export default User;