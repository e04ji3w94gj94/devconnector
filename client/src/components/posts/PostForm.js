import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postAction';
import { relativeTimeThreshold } from 'moment';

class PostForm extends React.Component {
	state = {
		text: '',
	};

	render() {
		const { text } = this.state;

		return (
			<div className='post-form'>
				<div className='bg-primary p'>
					<h3>Say Something...</h3>
				</div>
				<form
					className='form my-1'
					onSubmit={(e) => {
						e.preventDefault();
						this.props.addPost({ text });
						this.setState({ text: '' });
					}}
				>
					<textarea
						name='text'
						cols='30'
						rows='5'
						placeholder='Create a post'
						value={text}
						onChange={(e) => this.setState({ text: e.target.value })}
						required
					/>
					<button type='submit' className='btn btn-dark my-1'>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

PostForm.propTypes = {
	addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
