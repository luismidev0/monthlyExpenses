import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());


app.get('/', (_req:Request , res:Response)=>{
    res.send('OK');
})

app.get('/ping', (_req:Request, res:Response)=>{
    res.send('Pong');
})


export default app;