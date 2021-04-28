import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Form from '../../components/Form/Form';

const RegistartionPage = () => {
	return (
		<Container>
			<ContentContainer>
				<h1 className='content-container__title'>Sign in</h1>
				<Form type='register' />
			</ContentContainer>
			<Button title='Home' to='/' />
		</Container>
	);
};

export default RegistartionPage;
