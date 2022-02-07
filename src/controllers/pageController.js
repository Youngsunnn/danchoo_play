import Audio from "../models/Audio";


// export const home = async(req, res) => {
//     try {
//         const audios = await Audio.find({});
//         return res.render("home", {pageTitle: "Home", videos});
//     } catch {
//         return res.render("server-error");
//     }
    
// };

export const home = (req, res) => {
    return res.render("home", {pageTitle: "Homepage"})
}

export const watch = (req, res) => {
    const { id } = req.params;
    //^^^ == const id = req.params.id;
    return res.render("watch", {pageTitle: `Watching`});
};