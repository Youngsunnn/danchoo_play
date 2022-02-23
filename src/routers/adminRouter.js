import express from "express";
import {getUpload, postUpload, getImgUpload, postImgUpload, getUserUpload, postUserUpload, checkmedia, checkselection} from "../controllers/adminController";
import{OnlyAdminMiddleware, OnlyButtonMiddleware, uploadAudio, uploadImage} from "../middleware"

const adminRouter = express.Router();

adminRouter.route("/upload/audio").get(getUpload).post(uploadAudio.single("audios"), postUpload);
adminRouter.route("/upload/image").get(getImgUpload).post(uploadImage.single("images"), postImgUpload);
adminRouter.route("/upload/user").get(getUserUpload).post(postUserUpload);
adminRouter.route("/checkmedia").get(OnlyButtonMiddleware, checkmedia);
adminRouter.route("/checkselection").get(OnlyButtonMiddleware, checkselection);

export default adminRouter;