import mongoose from "mongoose";

const audioSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    createdAt: {type: Date, required: true, default: Date.now },
    nextone: {type: String, required: true, trim: true},
    fileUrl: {type: String, required: true, trim: true},
});


const Audio = mongoose.model("Audio", audioSchema);
export default Audio;