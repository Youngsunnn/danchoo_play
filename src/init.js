import "dotenv/config";
import "./db";
import Audio from "./models/Audio";
import User from "./models/User";
import Image from "./models/Image";
import app from "./server";

const PORT = 5000;

const handleListening = () =>
console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);