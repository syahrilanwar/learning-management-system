import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/', (req: Request, res: Response) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});