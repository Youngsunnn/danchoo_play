import mongoose from "mongoose";

const userImageSchema = new mongoose.Schema({
    username: {type: String, required: true, trim: true},
    createdAt: {type: Date, required: true, default: Date.now },
    fileUrl: {type: String, required: true, trim: true},
});


const UserImage = mongoose.model("userImage", userImageSchema);
export default UserImage;