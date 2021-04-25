import express from 'express';
import userRouter from './routes/api/userRouter.js';
import postsRouter from './routes/api/postsRouter.js';
import profileRouter from './routes/api/profileRouter.js';
import authRouter from './routes/api/authRouter.js';
import connectDB from './config/db.js';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));

// Use Routes
app.use('/api/user', userRouter);
app.use('/api/profile', profileRouter);
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
