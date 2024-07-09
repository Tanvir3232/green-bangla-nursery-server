import cors from "cors";
import express, { Application, Request, Response } from 'express';


const app: Application = express();

// Parsers
app.use(express.json());

app.use(cors());


app.get('/', (req: Request, res: Response) => {
    res.json('Welcome to Green Bangla Nursery');
});

export default app;
