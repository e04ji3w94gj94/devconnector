import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGithubRepos } from '../../actions/profileAction';

class ProfileGithub extends React.Component {
	componentDidMount() {
		this.props.getGithubRepos(this.props.username);
	}

	componentDidUpdate(prevProps) {
		if (this.props.getGithubRepos !== prevProps.getGithubRepos) {
			this.props.getGithubRepos(this.props.username);
		}
	}

	render() {
		const { repos } = this.props;

		return (
			<div className='profile-github'>
				<h2 className='text-primary my-1'>Github Repos</h2>
				{repos === null ? (
					<Spinner />
				) : (
					repos.map((repo) => (
						<div key={repo.id} className='repo bg-white p-1 my-1'>
							<div>
								<h4>
									<a
										href={repo.html_url}
										target='_blank'
										rel='noopener noreferrer'
									>
										{repo.name}
									</a>
								</h4>
								<p>{repo.description}</p>
							</div>
							<div>
								<ul>
									<li className='badge badge-primary'>
										Stars: {repo.stargazers_count}
									</li>
									<li className='badge badge-dark'>
										Watchers: {repo.watchers_count}
									</li>
									<li className='badge badge-light'>
										Forks: {repo.forks_count}
									</li>
								</ul>
							</div>
						</div>
					))
				)}
			</div>
		);
	}
}

ProfileGithub.propTypes = {
	getGithubRepos: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired,
	username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
