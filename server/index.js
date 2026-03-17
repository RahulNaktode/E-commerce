import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import { getHome, getHealth } from './controllers.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', getHome);
app.get('/health', getHealth);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    connectDB();
})