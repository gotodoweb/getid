import { form, div, table, list } from "./start.js";

import { getTodoLS, setTodoLS } from "./local.js";



const findlist = document.querySelector('.find');


let username = prompt('Name?', 'Vlad');



export const getuserName = () => {
	return username;
}



export const base = {
	user: username,
	todo: getTodoLS(),
	setid(id) {
		for (let i = 0; i < base.todo.length; i++) {
			if (base.todo[i].id == id) {				
				// console.log('id from check(id)', id);
				setTodoLS();
			}
		};
	},	
	check(id) {
		for (let i = 0; i < base.todo.length; i++) {
			if (base.todo[i].id == id) {
				base.todo[i].ready = 'Выполнена';
				// console.log('id from check(id)', id);
				setTodoLS();
			
			}
		};
	},
	checkpri(id, pri) {
		for (let i = 0; i < base.todo.length; i++) {
			if (base.todo[i].id == id) {
				base.todo[i].priority = `${pri}`;
				// console.log('base.todo[i].priority from checkpri', base.todo[i].priority);
				setTodoLS();
			}
		};
	},
	addTodo(post) {
		// getTodoLS(username);
		const todo = {
			id: base.todo.length + 1,
			author: this.user,
			post: post,
			ready: 'В процессе',
			priority: 'обычная',
		};
		// console.log('base.todo.priority', base.todo.priority);
		base.todo.push(todo);
		// console.log('todo from addTodo', base.todo);
		// return base.todo[base.todo.length - 1];
		setTodoLS();
		// console.log("priority from addTodo", todo.priority);

		return todo;
	},

	
};







export const getbtnsave = (form) => {

	// base.user = usname;
	
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


	renderTodo(list);
	form.addEventListener('submit', e => {
		e.preventDefault();

		const authorText = base.user;
		
		const postText = form[0].value;
		// console.log(postText.length);
		const readyText = 'В процессе';


		const objTodo = base.addTodo(postText);
		// console.log('objTodo',objTodo.priority);
		// console.log('base.todo', base.todo);

		const todoTr = createTodo(objTodo);
		// console.log('todoTr: ', todoTr);

		const fnew = createMyForm(objTodo, list);
		todoTr.appendChild(fnew);
		setTodoLS();
		list.append(todoTr);
		getid();

		// console.log('base.todo.length', base.todo.length);
		form[1].setAttribute('disabled', 'true');
		form.reset();

		form[1].setAttribute('disabled', 'true');
		setTodoLS();
	});


};


export function getid() {
	let allid = document.querySelectorAll('.count');
	allid.forEach((item, i) => item.textContent = i + 1);
	// allid.forEach((item, i) => base.setid(i));
};




function createTodo(objTodo) {

	const todoItem = `
			<tr>			
				<td class="count"></td>
				<td contenteditable="false" class="task">
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
					<button class="btn btn-secondary">
						Редактировать
					</button>
				</td>

			</tr>
			`;
	const tr = document.createElement('tr');
	tr.innerHTML = todoItem;

	// tr.classList = "";
	// tr.classList.add('begin');
	if (objTodo.ready === 'Выполнена') {
		tr.classList = "";
		tr.classList.add('table-success');

		let tdtask = tr.firstElementChild;
		let totasknext = tdtask.nextSibling;
		console.log('totasknext: ', totasknext);

		totasknext.nextSibling.classList.add('text-decoration-line-through');
	};

	
	if (objTodo.ready === 'В процессе') {
		// tr.classList = "";
		// tr.classList.add('begin');
		if (`${objTodo.priority}` === 'обычная') {

			tr.classList = '';
			tr.classList.add('table-light');
		};


		if (`${objTodo.priority}` === 'важная') {

			tr.classList = '';
			tr.classList.add('table-warning');
		};

		if (`${objTodo.priority}` === 'срочная') {

			tr.classList = '';
			tr.classList.add('table-danger');
		};

	};

	

	return tr;

};

export function createMyForm(objTodo) {
	const myform = document.createElement('td');
	// console.log('objTodo.priority', objTodo.priority, objTodo);

	myform.innerHTML = `
		<form class="my-form" name="f1" > 
			<select name="town" id="s1" class="form-input">			
				<option class="table-light" selected="selected">обычная</option>
				<option class="table-warning" selected="selected">важная</option>
				<option class="table-danger" selected="selected">срочная</option>
			</select>
				<input type="button" class="value" value="${objTodo.priority}">
		</form>
	`;



	if (`${objTodo.priority}` === 'обычная') {
		myform.innerHTML = `
			<form class="my-form" name="f1" >
				<select name="town" id="s1" class="form-input">
					<option class="table-warning" selected="selected">важная</option>
					<option class="table-danger" selected="selected">срочная</option>
					<option class="table-light" selected="selected">обычная</option>
				</select>
				<input type="button" class="value" style='background: white' value="${objTodo.priority}">
			</form>
		`;

	};

	if (`${objTodo.priority}` === 'важная') {
		myform.innerHTML = `
			<form class="my-form" name="f1" >
				<select name="town" id="s1" class="form-input">
					<option class="table-danger" selected="selected">срочная</option>
					<option class="table-light" selected="selected">обычная</option>
					<option class="table-warning" selected="selected">важная</option>
				</select>
				<input type="button" class="value" style='background: yellow' value="${objTodo.priority}">
			</form>
		`;

	};

	if (`${objTodo.priority}` === 'срочная') {
		myform.innerHTML = `
			<form class="my-form" name="f1" >
				<select name="town" id="s1" class="form-input">
					<option class="table-light" selected="selected">обычная</option>
					<option class="table-warning" selected="selected">важная</option>
					<option class="table-danger" selected="selected">срочная</option>
				</select>
				<input type="button" class="value" style='background: red' value="${objTodo.priority}">
			</form>
		`;

	};


	function fvalue(e) {
		e.preventDefault();

		const btnform = document.querySelectorAll('.value');


		for (var i = 0; i < btnform.length; i++) {
			if (btnform[i].previousElementSibling.value === 'обычная') {

				let remont = e.target.tagName;
				
				if(remont === 'SELECT') {
					console.log('remont: ', remont);
					getTodoLS();
					btnform[i].value = 'обычная';

					// console.log('base.todo[i].priority from getvalue1', base.todo[i].priority);
					base.todo[i].priority = 'обычная';
					setTodoLS();
					btnform[i].style.backgroundColor = "white";

					let gettr = btnform[i].closest('tr');;
					// console.log('gettr: ', gettr);
					let gettrue = gettr.classList.contains('table-success');
					if (!gettrue) {
						gettr.classList = "";
						gettr.classList.add('table-light');
					}

					setTodoLS();
				}

			} else if (btnform[i].previousElementSibling.value === 'важная') {

				let remontka = e.target.tagName;
				if (remontka === 'SELECT') {
					console.log('remontka: ', remontka);
					getTodoLS();
					btnform[i].value = 'важная';

					// console.log('base.todo[i].priority from getvalue1', base.todo[i].priority);
					base.todo[i].priority = 'важная';
					setTodoLS();
					btnform[i].style.backgroundColor = "yellow";

					let gettr = btnform[i].closest('tr');
					let gettrue = gettr.classList.contains('table-success');
					if (!gettrue) {
						gettr.classList = "";
						gettr.classList.add('table-warning');
					}
					setTodoLS();
				}


			} else if (btnform[i].previousElementSibling.value === 'срочная') {
				let peremotka = e.target.tagName;
				if (peremotka === 'SELECT') {
					console.log('peremotka: ', peremotka);
					getTodoLS();
					btnform[i].value = 'срочная';


					// console.log('base.todo[i].priority from getvalue1', base.todo[i].priority);
					base.todo[i].priority = 'срочная';
					setTodoLS();
					btnform[i].style.backgroundColor = "red";

					let gettr = btnform[i].closest('tr');
					let gettrue = gettr.classList.contains('table-success');
					if (!gettrue) {
						gettr.classList = "";
						gettr.classList.add('table-danger');
					}


					setTodoLS();
				}

			};
			getTodoLS();
			setTodoLS();

		}

	}

	setTodoLS();
	list.addEventListener('click', fvalue);

	return myform;

};


function renderTodo(list) {
	// getTodoLS(username);
	getTodoLS();

	if (base.todo) {
		for (let i = 0; i < base.todo.length; i++) {
			// console.log('base.todo[i]', base.todo[i].priority);
			const todoLi = createTodo(base.todo[i]);
			// console.log('todoLi from renderTodo', todoLi);
			// todoLi.appendChild(createMyForm());
			todoLi.appendChild(createMyForm(base.todo[i]));

			// todoLi.appendChild(createMyForm(base.todo[i].priority));
			list.append(todoLi);
			getid();
		};
	}

	setTodoLS();
};




