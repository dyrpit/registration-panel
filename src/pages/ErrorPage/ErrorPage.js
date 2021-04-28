import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';

import './ErrorPage.scss';

const ErrorPage = () => {
	return (
		<Container>
			<p className='error'>Ups... There is no site in here!</p>
			<Button title='home' to='/' />
		</Container>
	);
};

export default ErrorPage;
