import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

// config for .env to be received
dotenv.config();

// middleware
app.use(cors());

// mongodb connection
// mongoose.connect(process.env.MONGO_URL, {});

app.get("/", (req, res) => {
    res.send("Hello cmm Quang!!!");
});

app.listen(process.env.PORT, () => {
    console.log(`On PORT: ${process.env.PORT}!!`);
});
