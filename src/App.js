import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserProvider from './context/user-context';

import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RegistartionPage from './pages/RegistrationPage/RegistrationPage';
import UsersPage from './pages/UsersPage/UsersPage';

function App() {
	return (
		<UserProvider>
			<Router basename={process.env.PUBLIC_URL}>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/profile' component={ProfilePage} />
					<Route path='/login' component={LoginPage} />
					<Route path='/register' component={RegistartionPage} />
					<Route path='/about' component={AboutPage} />
					<PrivateRoute path='/profile' role='user' component={ProfilePage} />
					<PrivateRoute path='/users' role='admin' component={UsersPage} />
					<Route path='*' component={ErrorPage} />
				</Switch>
			</Router>
			<Footer />
		</UserProvider>
	);
}

export default App;
