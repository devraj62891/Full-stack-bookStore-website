import express, { urlencoded } from "express";
import cors from "cors"
import path from 'path';
import { fileURLToPath } from 'url';


const app=express();

app.use(cors());

app.use(express.json());
// app.use(urlencoded({extended:true}))
// app.use(express.static("public"))

// Serve static files from the React frontend app
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Anything that doesn't match the API routes should be passed to the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


export {app};