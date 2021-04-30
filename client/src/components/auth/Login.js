import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authAction';

class Login extends React.Component {
	state = {
		email: '',
		password: '',
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = async (e) => {
		const { email, password } = this.state;

		e.preventDefault();

		this.props.login(email, password);
	};

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to='/dashboard' />;
		}

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

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
