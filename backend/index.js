import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import morgan from "morgan";
import helmet from "helmet";

// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// console.log("hello");

const PORT = process.env.PORT || 9000;
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(async () => {
        app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connected at PORT ${PORT}}`));