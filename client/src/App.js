import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import store from './store';
import { loadUser } from './actions/authAction';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

class App extends React.Component {
	componentDidMount() {
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
							</Switch>
						</section>
					</>
				</Router>
			</Provider>
		);
	}
}

export default App;
