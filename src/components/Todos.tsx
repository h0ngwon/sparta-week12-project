import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import styled from 'styled-components';
import { getTodoData } from '../apis/todoApi';
import TodoItem from './TodoItem';

const Todos = () => {
	const { data } = useQuery<Todo[], AxiosError>({
		queryKey: ['todos'],
		queryFn: getTodoData,
	});

	return (
		<>
			<Container>
				{data
					?.filter((item: Todo) => item.isDone === false)
					.map((item: Todo) => {
						return <TodoItem key={item.id} item={item} />;
					})}
			</Container>
			<DoneContainer>
				{data
					?.filter((item: Todo) => item.isDone === true)
					.map((item: Todo) => {
						return <TodoItem key={item.id} item={item} />;
					})}
			</DoneContainer>
		</>
	);
};

export default Todos;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50vw;
	height: 50%;
	border: 3px solid;
	border-radius: 13px;
	padding: 24px;
    margin: 10px;
`;

const DoneContainer = styled(Container)``;
