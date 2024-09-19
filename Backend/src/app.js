import express, { urlencoded } from "express";
import cors from "cors"

const app=express();

// app.use(cors());
app.use(cors(
    {
        origin:["https://deploy-mern-1whq.vercel.app"],
        methods:["POST","GET"],
        credentials:true

    }
))
app.use(express.json());
// app.use(urlencoded({extended:true}))
// app.use(express.static("public"))

export {app};