import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alertAction';
import { register } from '../../actions/authAction';

class Register extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		password2: '',
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = async (e) => {
		const { name, email, password } = this.state;

		e.preventDefault();

		if (this.state.password !== this.state.password2) {
			this.props.setAlert('Passwords do not match', 'danger');
		} else {
			this.props.register({ name, email, password });
		}
	};
	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to='/dashboard' />;
		}

		const { name, email, password, password2 } = this.state;

		return (
			<>
				<h1 className='large text-primary'>Sign Up</h1>
				<p className='lead'>
					<i className='fas fa-user' /> Create Your Account
				</p>
				<form className='form' onSubmit={(e) => this.onSubmit(e)}>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Name'
							name='name'
							value={name}
							onChange={(e) => this.onChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='email'
							placeholder='Email Address'
							name='email'
							value={email}
							onChange={(e) => this.onChange(e)}
						/>
						<small className='form-text'>
							This site uses Gravatar so if you want a profile image, use a
							Gravatar email
						</small>
					</div>
					<div className='form-group'>
						<input
							type='password'
							placeholder='Password'
							name='password'
							value={password}
							onChange={(e) => this.onChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							placeholder='Confirm Password'
							name='password2'
							value={password2}
							onChange={(e) => this.onChange(e)}
						/>
					</div>
					<input type='submit' className='btn btn-primary' value='Register' />
				</form>
				<p className='my-1'>
					Already have an account? <Link to='/login'>Sign In</Link>
				</p>
			</>
		);
	}
}

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
