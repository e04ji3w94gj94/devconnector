import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import store from './store';
import { loadUser } from './actions/authAction';
import setAuthToken from './utils/setAuthToken';
import './App.css';

class App extends React.Component {
	componentDidMount() {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}

		store.dispatch(loadUser());
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<>
						<Navbar />
						<Route exact path='/' component={Landing} />
						<section className='container'>
							<Alert />
							<Switch>
								<Route exact path='/register' component={Register} />
								<Route exact path='/login' component={Login} />
								<Route exact path='/profiles' component={Profiles} />
								<Route exact path='/profile/:id' component={Profile} />
								<PrivateRoute exact path='/dashboard' component={Dashboard} />
								<PrivateRoute
									exact
									path='/create-profile'
									component={CreateProfile}
								/>
								<PrivateRoute
									exact
									path='/edit-profile'
									component={EditProfile}
								/>
								<PrivateRoute
									exact
									path='/add-experience'
									component={AddExperience}
								/>
								<PrivateRoute
									exact
									path='/add-education'
									component={AddEducation}
								/>
							</Switch>
						</section>
					</>
				</Router>
			</Provider>
		);
	}
}

export default App;
