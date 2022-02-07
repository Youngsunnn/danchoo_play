export const login = (req,res) => {
    return res.render("login", {pageTitle:"Login"});
};

export const logout = (req,res) => res.send("Logout");