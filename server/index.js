import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import { postSignUp, postLogin } from './controllers/auth.js';
import { getHome, getHealth } from './controllers/health.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8050;

app.use(cors());
app.use(express.json());

app.get('/', getHome);
app.get('/health', getHealth);

app.post('/signup', postSignUp);
app.post('/login', postLogin);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    connectDB();
})