import express from 'express';
import { check, validationResult } from 'express-validator';
const userRouter = express.Router();

// @route   POST api/users
// @desc    Register user
// @access  Public
userRouter.post(
	'/',
	[
		check('name', 'Name is required').notEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 }),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		res.send('User route');
	}
);

export default userRouter;
