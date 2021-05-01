import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profileAction';

class AddEducation extends React.Component {
	state = {
		formData: {
			school: '',
			degree: '',
			fieldofstudy: '',
			from: '',
			to: '',
			current: false,
			description: '',
		},
		toDateDisabled: false,
	};

	onChange = (e) => {
		this.setState({
			formData: {
				...this.state.formData,
				[e.target.name]: e.target.value,
			},
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addEducation(this.state.formData, this.props.history);
	};

	render() {
		const {
			school,
			degree,
			fieldofstudy,
			from,
			to,
			current,
			description,
		} = this.state.formData;

		const { toDateDisabled } = this.state;

		return (
			<>
				<h1 className='large text-primary'>Add Your Education</h1>
				<p className='lead'>
					<i className='fas fa-code-branch' /> Add any school or bootcamp that
					you have attended
				</p>
				<small>* = required field</small>
				<form className='form' onSubmit={this.onSubmit}>
					<div className='form-group'>
						<input
							type='text'
							placeholder='* School or Bootcamp'
							name='school'
							value={school}
							onChange={(e) => this.onChange(e)}
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='* Degree or Certificate'
							name='degree'
							value={degree}
							onChange={(e) => this.onChange(e)}
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='* Field of Study'
							name='fieldofstudy'
							value={fieldofstudy}
							onChange={(e) => this.onChange(e)}
							required
						/>
					</div>
					<div className='form-group'>
						<h4>From Date</h4>
						<input
							type='date'
							name='from'
							value={from}
							onChange={(e) => this.onChange(e)}
						/>
					</div>
					<div className='form-group'>
						<p>
							<input
								type='checkbox'
								name='current'
								checked={current}
								value={current}
								onChange={(e) => {
									this.setState({
										formData: { ...this.state.formData, current: !current },
									});
									this.setState({ toDateDisabled: !toDateDisabled });
								}}
							/>{' '}
							Current School
						</p>
					</div>
					<div className='form-group'>
						<h4>To Date</h4>
						<input
							type='date'
							name='to'
							value={to}
							onChange={(e) => this.onChange(e)}
							disabled={toDateDisabled ? 'disabled' : ''}
						/>
					</div>
					<div className='form-group'>
						<textarea
							name='description'
							cols='30'
							rows='5'
							placeholder='Program Description'
							value={description}
							onChange={(e) => this.onChange(e)}
						/>
					</div>
					<button type='submit' className='btn btn-primary my-1'>
						Submit
					</button>
					<a className='btn btn-light my-1' href='dashboard.html'>
						Go Back
					</a>
				</form>
			</>
		);
	}
}

AddEducation.propTypes = {
	addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
