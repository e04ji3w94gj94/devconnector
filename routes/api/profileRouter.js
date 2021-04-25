import express from 'express';

const profileRouter = express.Router();

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
profileRouter.get('/test', (req, res) => res.json({ msg: 'profile Works' }));

export default profileRouter;
