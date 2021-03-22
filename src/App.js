import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import LoginPage from './components/LoginPage/LoginPage';
import Nav from './components/Nav/Nav';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import UserProvider from './context/user-context';
import Footer from './components/Footer/Footer';
import RegistartionPage from './components/RegistrationPage/RegistrationPage';

function App() {
	return (
		<UserProvider>
			<Router>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={LoginPage} />
					<Route path='/register' component={RegistartionPage} />
					<PrivateRoute path='/profile' component={Profile} />
				</Switch>
			</Router>
			<Footer />
		</UserProvider>
	);
}

export default App;
