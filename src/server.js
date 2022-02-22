import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import adminRouter from "./routers/adminRouter";
import globalRouter from "./routers/globalRouter";
import pageRouter from "./routers/pageRouter";
import { localsMiddleware } from "./middleware";
// import 순서 지켜야 한다..!

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10800000,
    },
    store: MongoStore.create({mongoUrl:process.env.DB_URL})
})
);
app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
        next();
    });
});
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/style", express.static("style"));
app.use("/page/style", express.static("style"));
app.use("/", globalRouter);
app.use("/admin", adminRouter);
app.use("/page", pageRouter);

export default app;