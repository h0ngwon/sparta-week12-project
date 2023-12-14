import axios, { Axios } from 'axios';

const todoApi: Axios = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getTodoData = async (): Promise<Todo[]> => {
	try {
		const res = await todoApi.get<[Todo]>('/todos');
		return res.data;
	} catch (error) {
		throw error;
	}
};

export const addTodo = async (newTodo: Todo): Promise<Todo> => {
	try {
		const { data } = await todoApi.post<Todo>('/todos', newTodo);
		return data;
	} catch (error) {
		throw error;
	}
};
