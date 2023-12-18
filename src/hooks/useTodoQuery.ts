import {
	UseMutationResult,
	useMutation,
	useQuery,
	useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { addTodo, getTodoData, removeTodo, updateTodo } from '../apis/todoApi';

const useTodoQuery = () => {
	const queryClient = useQueryClient();

	const { data } = useQuery<Todo[], AxiosError>({
		queryKey: ['todos'],
		queryFn: getTodoData,
	});

	const addMutation: UseMutationResult<Todo, Error, Todo, unknown> =
		useMutation({
			mutationKey: ['todos'],
			mutationFn: addTodo,
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ['todos'] });
			},
		});

	const updateMutatation = useMutation({
		mutationKey: ['todos'],
		mutationFn: updateTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['todos'],
			});
		},
	});

	const deleteMutatation: UseMutationResult<Todo, Error, string, unknown> =
		useMutation({
			mutationKey: ['todos'],
			mutationFn: removeTodo,
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: ['todos'],
				});
			},
		});

	return {
		todos: data,
		addTodo: addMutation,
		updateTodo: updateMutatation,
		removeTodo: deleteMutatation,
	};
};

export default useTodoQuery;
