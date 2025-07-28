import mongoose, {Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "default.png"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String,
        default: ''
    },

});

const User = mongoose.model("User", userSchema);
export default User;