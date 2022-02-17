// import Audio from "../models/Audio";


export const home = (req, res) => {
    return res.render("home", {pageTitle: "Homepage"})
}

// export const piece = (req, res) => {
//     const { title } = req.params;
//     //^^^ == const id = req.params.id;
//     return res.render("piece", {pageTitle: `Watching`});
// };

// export const choice = (req, res) => {
//     return restart.render("choice", {pageTitle: `Choose What you want`})
// }

