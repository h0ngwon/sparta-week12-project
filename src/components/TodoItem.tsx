import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled, { css } from 'styled-components';
import { removeTodo, updateTodo } from '../apis/todoApi';

const TodoItem = (props: { item: Todo }) => {
	const { id, title, isDone } = props.item;
	const queryClient = useQueryClient();

	const updateMutate = useMutation({
		mutationKey: ['todos'],
		mutationFn: updateTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['todos'],
			});
		},
	});

	const isDoneHandler = (id: string) => {
		updateMutate.mutate({
			...props.item,
			isDone: !isDone,
		});
	};

	const deleteMutate = useMutation({
		mutationKey: ['todos'],
		mutationFn: removeTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['todos'],
			});
		},
	});

	const deleteTodoHandler = (id: string) => {
		deleteMutate.mutate(id);
	};

	return (
		<Container $done={isDone}>
			{title}
			<ButtonContainer>
				<DoneButton
					onClick={() => {
						isDoneHandler(id);
					}}
				>
					{isDone ? '취소' : '완료'}
				</DoneButton>
				<DeleteButton
					onClick={() => {
						deleteTodoHandler(id);
					}}
				>
					삭제
				</DeleteButton>
			</ButtonContainer>
		</Container>
	);
};

export default TodoItem;

const Container = styled.div<{ $done: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 50%;
	padding: 15px;
	margin: 15px;
	border: 5px solid;
	border-radius: 12px;
	border-color: ${(props) => (props.$done ? 'green' : 'red')};
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 12px;
`;

const DoneButton = styled.button`
	font-size: 20px;
	padding: 12px;
	border-radius: 12px;
	border: none;
	cursor: pointer;
	background-color: black;
	color: white;

	&:hover {
		background-color: #626f85
	}
`;

const DeleteButton = styled(DoneButton)``;
