import { useQuery, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';
import { getTodoData } from '../apis/todoApi';
import TodoItem from './TodoItem';

const Todos = () => {
	const queryClient = useQueryClient();

	const { data } = useQuery({
		queryKey: ['todos'],
		queryFn: getTodoData,
	});

	return (
		<Container>
			{data?.map((item) => {
				return <TodoItem key={item.id} item={item} />;
			})}
		</Container>
	);
};

export default Todos;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50vw;
	height: 100%;
	border: 3px solid;
	border-radius: 13px;
	padding: 24px;
`;
