import express, { urlencoded } from "express";
import cors from "cors"


const app=express();

app.use(cors());

app.use(express.json());
// app.use(urlencoded({extended:true}))
// app.use(express.static("public"))

// Serve static files from the React frontend app


export {app};