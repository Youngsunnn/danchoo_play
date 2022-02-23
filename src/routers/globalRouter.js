import express from "express";
import {getLogin, postLogin, logout} from "../controllers/userController";
import {home} from "../controllers/pageController";
import {protectorMiddleware, publicOnlyMiddleware} from "../middleware";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);
globalRouter.route("/logout").get(protectorMiddleware, logout);

export default globalRouter;