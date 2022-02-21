import express from "express";
import {media, choice, mediaintro, byebye, getUserImg, postUserImg} from "../controllers/pageController";
import {protectorMiddleware, uploadImgbyUser} from "../middleware"

const pageRouter = express.Router();

pageRouter.route("/media/:name").get(protectorMiddleware, media);
pageRouter.route("/media/:name").get(protectorMiddleware, mediaintro);
pageRouter.route("/choice/:name").get(protectorMiddleware, choice);
pageRouter.route("/upload").all(protectorMiddleware).get(getUserImg).post(uploadImgbyUser.single("userimages"), postUserImg);
pageRouter.route("/byeXD").get(protectorMiddleware, byebye);

export default pageRouter;