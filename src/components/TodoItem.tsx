import styled from 'styled-components';
import useTodoQuery from '../hooks/useTodoQuery';
import Swal from 'sweetalert2';

const TodoItem = (props: { item: Todo }) => {
	const { id, title, content, isDone } = props.item;
	const { updateTodo, removeTodo } = useTodoQuery();

	const isDoneHandler = (id: string): void => {
		updateTodo.mutate({
			...props.item,
			isDone: !isDone,
		});
	};

	const deleteTodoHandler = (id: string): void => {
		Swal.fire({
			title: '삭제하시겠습니까?',
			text: '삭제된 투두리스트는 되돌릴 수 없습니다!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: '삭제하기',
			cancelButtonText: '취소',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: '삭제되었습니다!',
					icon: 'success',
				});
				removeTodo.mutate(id);
			}
		});
	};

	return (
		<Container $done={isDone}>
			<TitleContainer>{title}</TitleContainer>
			<ContentContainer>{content}</ContentContainer>
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
	flex-direction: column;
	width: 50%;
	padding: 15px;
	margin: 15px;
	border: 5px solid;
	border-radius: 12px;
	border-color: ${(props) => (props.$done ? 'green' : 'red')};
`;

const TitleContainer = styled.div`
	font-size: 32px;
	margin: 5px;
`;

const ContentContainer = styled.div`
	font-size: 24px;
	margin: 5px;
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
		background-color: #626f85;
	}
`;

const DeleteButton = styled(DoneButton)``;
