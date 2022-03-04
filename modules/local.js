// import start from "./start.js";
import { base } from "./base.js";


export const getTodoLS = () => {
	// если данные какие-то есть - получаем через метод getItem c ключом 'todo'
	if (localStorage.getItem('todo')) {
		return JSON.parse(localStorage.getItem('todo'));
	}
	return [];
};

export const setTodoLS = () => {
	localStorage.setItem('todo', JSON.stringify(base.todo));
};

