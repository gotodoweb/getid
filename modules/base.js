import { form, div, table, list } from "./start.js";

import { getTodoLS, setTodoLS } from "./local.js";

const findlist = document.querySelector('.find');


export const base = {
	user: '',
	users: [],
	getusers() {
		console.log('users from getusers', this.users);
	},
	todo: [
		// {
		// 	id: 1,
		// 	author: 'Денис Петрович',
		// 	post: 'Выполнить отгрузку пылесосов',
		// 	ready: 'В процессе',
		// }
	],
	check(id) {
		for (let i = 0; i < base.todo.length; i++) {
			if (base.todo[i].id === id) {
				base.todo[i].ready = 'Выполнена';
			}
		};
		console.log('id from check(id)', id);
	},
	addTodo(post) {
		const todo = {
			id: base.todo.length + 1,
			author: this.user,
			post: post,
			ready: 'В процессе',
		};

		base.todo.push(todo);
		// console.log('todo from addTodo', base.todo);
		// return base.todo[base.todo.length - 1];
		return todo;
	},
	deleteid(id) {
		for (let i = 0; i < base.todo.length; i++) {
			if (base.todo[i].id === id) {
				base.todo[i].remove();
			}
		};
		console.log('todo after deletid', base.todo);
	},

};



export const getbtnsave = (form) => {

	function clearTodo(event) {
		form[1].setAttribute('disabled', 'true');
	};
	
	let btnclear = document.querySelector('.btn.btn-warning');
	btnclear.addEventListener('click', clearTodo);

	function checkTodo(event) {
		// console.log('click');
		form[1].removeAttribute('disabled');
	};

	let formcontrol = document.querySelector('.form-control')

	formcontrol.addEventListener('input', checkTodo);



	form.addEventListener('submit', e => {
		e.preventDefault();

		const authorText = base.user;
		const postText = form[0].value;
		console.log(postText.length);
		const readyText = 'В процессе';

		const objTodo = base.addTodo(postText);
		console.log('objTodo',objTodo);
		console.log('base.todo', base.todo);
				
		const todoTr = createTodo(objTodo);
		list.append(todoTr);
		

		// console.log('base.todo.length', base.todo.length);
		form[1].setAttribute('disabled', 'true');
		form.reset();
		// renderTodo();
		form[1].setAttribute('disabled', 'true');
	});

};


function getid() {
	let allid = document.querySelectorAll('.count');
	allid.forEach((item, i) => item.textContent = i + 1);

};

function createTodo(objTodo) {
	
	const todoItem = `
			<tr>			
				<td class="count"></td>
				<td class="task">
					${objTodo.post}
				</td>
				<td>${objTodo.ready}</td>
				<td>
					<button class="btn btn-danger">
						Удалить
					</button>
					<button class="btn btn-success">
						Завершить
					</button>
				</td>
			</tr>			
		`;
	
	const tr = document.createElement('tr');
	tr.classList.add('table-light');
	tr.innerHTML = todoItem;
	
	getid();
	return tr;
};



