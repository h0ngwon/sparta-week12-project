import { FormEvent } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import useInput from '../hooks/useInput';
import useTodoQuery from '../hooks/useTodoQuery';

const NewTodo = () => {
	const [newTodoTitle, titleHandler] = useInput<string>('');
	const [newTodoContent, contentHandler] = useInput<string>('');
	const { addTodo } = useTodoQuery();

	const submitHandler = (e: FormEvent): void => {
		e.preventDefault();
		addTodo.mutate({
			id: uuid(),
			title: newTodoTitle,
			content: newTodoContent,
			isDone: false,
		});
	};

	return (
		<TodoForm onSubmit={submitHandler}>
			<TodoTitleInput
				onChange={titleHandler}
				placeholder='제목'
				value={newTodoTitle}
				required
			/>
			<TodoContentInput
				onChange={contentHandler}
				placeholder='내용'
				value={newTodoContent}
				required
			/>
			<TodoButton>등록하기</TodoButton>
		</TodoForm>
	);
};

export default NewTodo;

const TodoForm = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ccc;
`;
const TodoTitleInput = styled.input`
	font-size: 32px;
	padding: 15px;
	margin: 20px;
	border: 3px solid;
	border-radius: 15px;
`;

const TodoContentInput = styled(TodoTitleInput)``;

const TodoButton = styled.button`
	font-size: 32px;
	padding: 15px;
	margin: 15px;
	border: none;
	border-radius: 15px;
	background-color: black;
	color: white;
	cursor: pointer;
`;
