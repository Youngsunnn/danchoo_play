import express from "express";
import {media, choice, gethello, getintro1, getintro2, byebye, getUserImg, postUserImg} from "../controllers/pageController";
import {protectorMiddleware, uploadImgbyUser} from "../middleware"

const pageRouter = express.Router();

pageRouter.route("/media/:name").get(protectorMiddleware, media);
pageRouter.route("/hello").get(protectorMiddleware, gethello);
pageRouter.route("/intro1").get(protectorMiddleware, getintro1);
pageRouter.route("/intro2").get(protectorMiddleware, getintro2);
pageRouter.route("/choice/:name").get(protectorMiddleware, choice);
pageRouter.route("/upload").all(protectorMiddleware).get(getUserImg).post(uploadImgbyUser.single("userimages"), postUserImg);
pageRouter.route("/byeXD").get(protectorMiddleware, byebye);

export default pageRouter;