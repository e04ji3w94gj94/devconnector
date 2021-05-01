import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profileAction';

class Profiles extends React.Component {
	componentDidMount() {
		this.props.getProfiles();
	}

	render() {
		const {
			profile: { profiles, loading },
		} = this.props;

		return (
			<>
				{loading ? (
					<Spinner />
				) : (
					<>
						<h1 className='large text-primary'>Developers</h1>
						<p className='lead'>
							<i className='fab fa-connectdevelop' /> Browse and connect with
							developers
						</p>
						<div className='profiles'>
							{profiles.length > 0 ? (
								profiles.map((profile) => (
									<ProfileItem key={profile._id} profile={profile} />
								))
							) : (
								<h4>No profiles found...</h4>
							)}
						</div>
					</>
				)}
			</>
		);
	}
}

Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
