import multer from "multer";

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
    if(req.session.user.phoneNum === "button"){
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

export const uploadAudio = multer({ dest: "uploads/audios" });
export const uploadImage = multer({ dest: "uploads/images" });
export const uploadImgbyUser = multer({ dest: "uploads/users/images" });