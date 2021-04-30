import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	state = {
		email: '',
		password: '',
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = async (e) => {
		e.preventDefault();
		console.log('SUCCESS');
	};

	render() {
		const { email, password } = this.state;

		return (
			<>
				<h1 className='large text-primary'>Sign In</h1>
				<p className='lead'>
					<i className='fas fa-user' /> Sign Into Your Account
				</p>
				<form className='form' onSubmit={(e) => this.onSubmit(e)}>
					<div className='form-group'>
						<input
							type='email'
							placeholder='Email Address'
							name='email'
							value={email}
							onChange={(e) => this.onChange(e)}
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							placeholder='Password'
							name='password'
							value={password}
							onChange={(e) => this.onChange(e)}
							minLength='6'
						/>
					</div>
					<input type='submit' className='btn btn-primary' value='Login' />
				</form>
				<p className='my-1'>
					Don't have an account? <Link to='/register'>Sign Up</Link>
				</p>
			</>
		);
	}
}

export default Login;
