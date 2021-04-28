import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Form from '../../components/Form/Form';

const LoginPage = () => {
	return (
		<Container>
			<ContentContainer>
				<h1 className='content-container__title'>Log in</h1>
				<Form />
			</ContentContainer>
			<Button title='Home' to='/' />
		</Container>
	);
};

export default LoginPage;
