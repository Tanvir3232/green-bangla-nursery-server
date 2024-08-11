import cors from "cors";
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";


const app: Application = express();

// Parsers
app.use(express.json());


app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
// Application routes
app.use('/api/', router);

app.get('/', (req: Request, res: Response) => {
    res.json('Welcome to Green Bangla Nursery');
});
app.use(globalErrorHandler)
export default app;
