import "regenerator-runtime";
import "dotenv/config";
import "./db";
import Audio from "./models/Audio";
import User from "./models/User";
import Image from "./models/Image";
import UserImage from "./models/UserImage";
import app from "./server";

const PORT = process.env.PORT || 5000;

const handleListening = () =>
console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);