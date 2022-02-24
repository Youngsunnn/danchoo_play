import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk"

const s3 = new aws.S3({
    credentials: {
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET
    }
});

// const isHeroku = process.env.NODE_ENV === "production";

const s3ImageUploader = multerS3({
    s3: s3,
    bucket: 'danchoo/images',
    acl: "public-read",
});

const s3AudioUploader = multerS3({
    s3: s3,
    bucket: 'danchoo/audios',
    acl: "public-read",
});

const s3UserImageUploader = multerS3({
    s3: s3,
    bucket: 'danchoo/userimages',
    acl: "public-read",
});

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "VitroButton";
    res.locals.loggedInUser = req.session.user;
    res.locals.loggedInAdmin = req.session.user && req.session.user.username === "admin";
    res.locals.loggedInButton = req.session.user && req.session.user.phoneNum === "danchoo";
    next();
};

export const protectorMiddleware = (req, res, next) => {
    if(req.session.loggedIn){
        next();
    } else {
        return res.redirect("/login");
    }
};

export const publicOnlyMiddleware = (req, res, next) => {
    if(!req.session.loggedIn){
        next();
    } else {
        return res.redirect("/");
    }
};

export const OnlyButtonMiddleware = (req, res, next) => {
    if(req.session.user.phoneNum === "danchoo"){
        next();
    } else {
        return res.render("404", {pageTitle: "403: Access Denied"})
    }
}

export const OnlyAdminMiddleware = (req, res, next) => {
    if(req.session.user && req.session.user.username === "admin"){
        next();
    } else {
        return res.render("404", {pageTitle: "403: Access Denied"})
    }
}

export const uploadAudio = multer({
    // dest: "uploads/audios",
    storage: s3AudioUploader,
});

export const uploadImage = multer({
    // dest: "uploads/images",
    storage: s3ImageUploader,
});

export const uploadImgbyUser = multer({
    // dest: "uploads/users/images",
    storage: s3UserImageUploader,
});