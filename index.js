const MONGO_URL =
    "mongodb+srv://tpsang1408:Charontps1408@product-01.s59wi5m.mongodb.net/?retryWrites=true&w=majority&appName=Product-01";

import mongoose from "mongoose";
import express from "express";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.listen(PORT, () => {
    console.log(`On PORT: ${PORT}!!`);
});
