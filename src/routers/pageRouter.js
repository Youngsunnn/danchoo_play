import express from "express";
import {watch} from "../controllers/pageController";

const pageRouter = express.Router();

pageRouter.get("/:id([0-9a-f]{24})", watch);
pageRouter.route("/upload").get(getUpload).post(postUpload);

export default pageRouter;