import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import pageRouter from "./routers/pageRouter";
// import 순서 지켜야 한다..!

const app = express();
const logger = morgan("dev");

const PORT = 5000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use("/", globalRouter);
app.use("/page", pageRouter);

// export default app;


const handleListening = () =>
console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);