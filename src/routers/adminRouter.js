import express from "express";
import {getUpload, postUpload, getImgUpload, postImgUpload, getUserUpload, postUserUpload, checkmedia, checkselection} from "../controllers/adminController";
import{OnlyAdminMiddleware, OnlyButtonMiddleware} from "../middleware"

const adminRouter = express.Router();

adminRouter.route("/upload/audio").get(getUpload).post(postUpload);
adminRouter.route("/upload/image").get(getImgUpload).post(postImgUpload);
adminRouter.route("/upload/user").all(OnlyAdminMiddleware).get(getUserUpload).post(postUserUpload);
adminRouter.route("/checkmedia").get(checkmedia);
adminRouter.route("/checkselection").get(checkselection);

export default adminRouter;