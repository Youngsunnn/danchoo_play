import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    phoneNum: { type: String, required: true },
    showNum: { type: String, required: true },
    paths: {type: String},
});


const User = mongoose.model('User', userSchema);

export default User;