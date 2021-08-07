import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/postAction';

class CommentForm extends React.Component {
	state = {
		text: '',
	};

	render() {
		const { postId, addComment } = this.props;
		const { text } = this.state;

		return (
			<div className='post-form'>
				<div className='bg-primary p'>
					<h3>Leave a Comment</h3>
				</div>
				<form
					className='form my-1'
					onSubmit={(e) => {
						e.preventDefault();
						addComment(postId, { text });
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

CommentForm.propTypes = {
	addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
