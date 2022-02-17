import express from "express";
import {getLogin, postLogin, logout} from "../controllers/userController";
import {home} from "../controllers/pageController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.get("/logout", logout);

export default globalRouter;