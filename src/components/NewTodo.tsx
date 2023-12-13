import styled from 'styled-components';

const NewTodo = () => {
	return (
		<TodoForm>
			<TodoInput placeholder='할일입력' />
		</TodoForm>
	);
};

export default NewTodo;

const TodoForm = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const TodoInput = styled.input`
	font-size: 32px;
	padding: 15px;
	margin: 20px;
	border: 3px solid;
	border-radius: 15px;
`;
