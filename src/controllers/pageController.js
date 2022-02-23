import Audio from "../models/Audio"
import User from "../models/User"
import UserImage from "../models/UserImage"


export const home = (req, res) => {
    return res.render("home", {pageTitle: "말걸음 : 발걸음 : 마주걸음"})
};

export const media = async(req, res) => {
    const title = req.params.name;
    const mediaFile = await Audio.find({title});
    console.log(mediaFile)
    if(!mediaFile) {
        return res.render('404', {pageTitle: "404: 존재하지 않는 페이지입니다."});
    }
    const username = req.session.user.username;
    // const currentPath = req.session.user.paths;
    // const updatedUser = await User.findOneAndUpdate(username,
    //     {
    //         paths: currentPath + title + ", ",
    //     });
    // req.session.user=updatedUser;
    return res.render("media/media", {pageTitle:"말걸음 : 발걸음 : 마주걸음", mediaFile});
};

export const gethello = (req, res) => {
    return res.render("instruction", {pageTitle: "안내사항"});
};

export const getintro1 = (req, res) => {
    return res.render("intro1", {pageTitle: "Intro"});
};

export const getintro2 = (req, res) => {
    return res.render("intro2", {pageTitle: "Intro"});
};

export const choice = (req, res) => {
    const { name } = req.params;
    if (name > 3) {
        return res.render('404', {pageTitle: "404: 존재하지 않는 페이지입니다."});
    }
    return res.render("media/choice"+name, {pageTitle:"말걸음 : 발걸음 : 마주걸음"});
};

export const byebye = (req, res) => {
    return res.render('bye', {pageTitle:'Bye!'});
};

export const getUserImg = (req, res) => {
    return res.render('media/upload', {pageTitle:'Upload Image'});
};

export const postUserImg = async (req, res) => {
    const file = req.file;
    const username = req.session.user.username;
    console.log(file);
    console.log(username);
    try{
        await UserImage.create({
            username,
            fileUrl: file.location,
        })
    } catch(error){
        console.log(error);
        return res.status(400).render('media/upload', {pageTitle:'Upload Image'})
    }
    return res.render('media/upload', {pageTitle:'Upload Image'})
}