import express from 'express';

const postsRouter = express.Router();

// @route   GET api/posts/test
// @desc    Tests posts route
// @access  Public
postsRouter.get('/test', (req, res) => res.json({ msg: 'posts Works' }));

export default postsRouter;
