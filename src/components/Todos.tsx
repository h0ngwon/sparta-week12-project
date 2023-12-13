import styled from 'styled-components';
import TodoItem from './TodoItem';

const Todos = () => {
	return (
		<Container>
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</Container>
	);
};

export default Todos;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50vw;
	height: 80vh;
	border: 3px solid;
	border-radius: 13px;
	padding: 24px;
`;
