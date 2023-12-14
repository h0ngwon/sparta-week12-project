import styled from 'styled-components';

const TodoItem = (props: { item: Todo }) => {
	const { title, isDone } = props.item;
	return (
		<Container>
			{title}
			<ButtonContainer>
				<DoneButton>{isDone ? '취소' : '완료'}</DoneButton>
				<DeleteButton>삭제</DeleteButton>
			</ButtonContainer>
		</Container>
	);
};

export default TodoItem;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 50%;
	padding: 15px;
	margin: 15px;
	border: 2px solid;
	border-radius: 12px;
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 12px;
`;

const DoneButton = styled.button`
	font-size: 24px;
	padding: 12px;
`;

const DeleteButton = styled(DoneButton)``;
