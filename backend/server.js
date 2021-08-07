import express from 'express';
import userRouter from './routes/api/userRouter.js';
import postsRouter from './routes/api/postsRouter.js';
import profileRouter from './routes/api/profileRouter.js';
import authRouter from './routes/api/authRouter.js';
import connectDB from './config/db.js';
import path from 'path';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Use Routes
app.use('/api/user', userRouter);
app.use('/api/profile', profileRouter);
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
