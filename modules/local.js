
import { base, getuserName, createMyForm } from "./base.js";

const sortByField = (field) => (a, b) => a[field] > b[field] ? 1 : -1;




export const getTodoLS = () => {
	// console.log('getuserName() from getTodoLS', getuserName());
	
	// если данные какие-то есть - получаем через метод getItem c ключом 'todo'

	for (let key in localStorage) {
		if (localStorage.hasOwnProperty(getuserName())) {
			console.log('getuserName()1', getuserName());
			
			
			if (localStorage.getItem(getuserName())) {
				// return JSON.parse(localStorage.getItem(getuserName())).sort(sortByField('priority'));
			
				console.log('getuserName()2', getuserName());
				return JSON.parse(localStorage.getItem(getuserName()));
			}
		} else {
			return [];
		}
	}
};


export const setTodoLS = () => {
	localStorage.setItem(getuserName(), JSON.stringify(base.todo));

};



