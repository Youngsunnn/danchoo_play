import Audio from "../models/Audio";
import User from "../models/User";
import Image from "../models/Image";
import UserImage from "../models/UserImage";

export const getUpload = async (req, res) => {
    return res.render("admin/uploadaudio", {pageTitle: "Upload Audio"});
};

export const postUpload = async (req, res) => {
    const file = req.file;
    const {title, nextone} = req.body;
    try{
        await Audio.create({
            title,
            nextone,
            fileUrl: file.paths,
        });
        return res.render("admin/uploadaudio", {pageTitle: "Upload Audio"});
    } catch (error){
        console.log(error);
        return res.status(400).render("admin/uploadaudio");
    }
};

export const getImgUpload = async (req, res) => {
    return res.render("admin/uploadimg", {pageTitle: "Upload Image"})
};

export const postImgUpload = async (req, res) => {
    const file = req.file;
    const { title } = req.body;
    try{
        await Image.create({
            title,
            fileUrl: file.paths,
        })
        return res.render("admin/uploadimg", {pageTitle: "Upload Image"})
    } catch (error) {
        console.log(error);
        return res.status(400).render("admin/uploadimg");
    }
};

export const getUserUpload = async (req, res) => {
    return res.render("admin/uploaduser", {pageTitle: "Upload User"})
};

export const postUserUpload = async (req, res) => {
    const {username, phoneNum, showNum} = req.body;
    const exists = await User.exists({$or:[{username}]})
    if(exists){
        return res.status(400).render("admin/uploaduser", {pageTitle:"Upload User", errorMessage:"이미 등록된 이름입니다"});
    }

    try{
        await User.create({
            username, 
            phoneNum,
            showNum,
            paths: ""
        });
        return res.render("admin/uploaduser", {pageTitle:"Upload User", errorMessage: "등록 성공"});
    } catch (error) {
        console.log(error);
        return res.status(400).render("admin/uploaduser", {
            pageTitle: "Upload User",
            errorMessage: "An unknown error has occurred"
        })
    }
};

export const checkmedia = async (req, res) => {
    try{
        const userImage = await UserImage.find({}).sort({createdAt: "descending"});
        console.log(userImage);
        return res.render("admin/checkmedia", {pageTitle: "Check Media", userImage})
    } catch{
        return res.render("404", {pageTitle: 'Server Error'});
    }
    
};

export const checkselection = async (req, res) => {
    try{
        const user = await User.find({});
        console.log(user);
        return res.render("admin/checkselection", {pageTitle: "Check Selection", user})
    } catch{
        return res.render("404", {pageTitle: 'Server Error'});
    }
};



// export const getJoin = (req,res) => res.render("join", {pageTitle:"Join"});
// export const postJoin = async (req,res) => {
//     const {name, username, email, password, password2, location } = req.body;
//     const pageTitle = "Join";
//     if(password !== password2){
//         return res.status(400).render("join", {pageTitle, errorMessage: "Password confirmation does not match."});
//     }
//     const exists = await User.exists({$or: [{username},{email}]});
//     if(exists){
//         return res.status(400).render("join", {pageTitle, errorMessage:"This username/email is already taken."});
//     }

//     try{
//         await User.create({
//             name, 
//             username, 
//             email, 
//             password, 
//             location,
//         });
//         return res.redirect("/login");
//     } catch (error) {
//         return res.status(400).render("join", {
//             pageTitle: "Join",
//             errorMessage: "An unknown error has occurred"
//         })
//     }
    
// };