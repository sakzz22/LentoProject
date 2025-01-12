import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

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
app.use("/user",userRoute)

app.listen(PORT , () => {
    console.log(`running on port ${PORT}`);
    
})