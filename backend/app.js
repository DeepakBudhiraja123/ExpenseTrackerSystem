import express from "express";
import cors from "cors";
import { db } from "./db/db.js";
import "dotenv/config" 
import incomeRouter from "./routes/incomeRoute.js"

const PORT = process.env.PORT;

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/income", incomeRouter);

const server = () => {
    db();
    app.listen(PORT, ()=>{
        console.log('Listening to Port: ', PORT);
    })  
}

server();