import styled from 'styled-components';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

const App = () => {
	return (
		<Container>
			<NewTodo />
			<Todos />
		</Container>
	);
};

export default App;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
