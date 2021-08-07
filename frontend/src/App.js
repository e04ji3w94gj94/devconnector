import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
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
						<Switch>
							<Route exact path='/' component={Landing} />
							<Route component={Routes} />
						</Switch>
					</>
				</Router>
			</Provider>
		);
	}
}

export default App;
