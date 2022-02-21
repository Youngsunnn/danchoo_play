import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    createdAt: {type: Date, required: true, default: Date.now },
    fileUrl: {type: String, required: true, trim: true},
});


const Image = mongoose.model("Image", imageSchema);
export default Image;