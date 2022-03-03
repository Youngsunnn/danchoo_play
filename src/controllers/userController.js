import User from "../models/User";


export const getLogin = (req,res) => {
    res.render("login", {pageTitle: "Login"})
};

export const postLogin = async (req,res) => {
    const {username, phoneNum} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status(400).render("login", {
            pageTitle: "Login",
            errorMessage: "관람자 정보가 존재하지 않습니다."
        });
    }
    const ok = Boolean(phoneNum === user.phoneNum);
    if(!ok){
        return res.status(400).render("login", {
            pageTitle: "Login",
            errorMessage: "코드가 잘못되었습니다."
        });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/page/hello");
};

export const logout = (req,res) => {
    req.session.destroy();
    return res.redirect("/");
};