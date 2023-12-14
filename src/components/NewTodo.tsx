import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { addTodo } from '../apis/todoApi';

const NewTodo = () => {
	const queryClient = useQueryClient();
	const [newTodoTitle, setNewTodoTitle] = useState<string>('');

	const newTodoInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setNewTodoTitle(e.target.value);
	};

	const addMutation = useMutation({
		mutationKey: ['todos'],
		mutationFn: addTodo,
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});

	const submitHandler = (e: FormEvent): void => {
		e.preventDefault();
		addMutation.mutate({ id: uuid(), title: newTodoTitle, isDone: false });
		setNewTodoTitle('');
	};

	return (
		<TodoForm onSubmit={submitHandler}>
			<TodoInput
				onChange={newTodoInputHandler}
				placeholder='할일입력 후 엔터'
				value={newTodoTitle}
				required
			/>
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
