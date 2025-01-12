import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import userRoute from "./route/user.route.js"

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDB_URI;

try {
    await mongoose.connect(URI); 
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

//defining routes
app.use("/user",userRoute);

if(process.env.NODE_ENV === "production"){
    const dirPath = path.resolve();
    app.use(express.static("frontend/dist"));
    app.get("*", (req , res) => {
        res.sendFile(path.resolve(dirPath,"frontend","dist","index.html"));
    })
}


app.listen(PORT , () => {
    console.log(`running on port ${PORT}`);
    
})