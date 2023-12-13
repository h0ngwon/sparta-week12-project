import { v4 as uuid } from 'uuid';

class Todo {
	id: string;
	title: string;
	isDone: boolean;

	constructor(title: string) {
		this.id = uuid();
		this.title = title;
		this.isDone = false;
	}
}

export default Todo;
