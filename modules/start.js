import { base, getbtnsave} from "./base.js";
import { getbtndel, getdonempost, getcontediatable } from "./event.js";


export const form = document.createElement('form');
export const div = document.createElement('div');
export const table = document.createElement('table');
export const list = document.createElement('tbody');

list.classList.add('find');







export const start = (app) => {
	
	
	createTitle(app);
	
	
};





const createTitle = (app) => {	

	app.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

	let todoTitle = document.createElement('h3');
	todoTitle.innerHTML = 'Todo App';
	app.append(todoTitle);
	createForm(app);
};


const createForm = (app) => {	
	form.classList.add('d-flex', 'align-items-center', 'mb-3');
	form.innerHTML = `
	
		<label class="form-group me-3 mb-0">
			<input type="text" class="form-control" placeholder="ввести задачу">
		</label>

		<button type="submit" class="btn btn-primary me-3">
			Сохранить
		</button>

		<button type="reset" class="btn btn-warning">
			Очистить
		</button>
	
	`;
	// form.id = 'form-todo';
	app.append(form);
	form[1].setAttribute('disabled', 'true');
	createTable(app, form);
	
};

const createTable = (app, form) => {	
	div.classList.add('table-wrapper');
	app.append(div);
	
	table.classList.add('table', 'table-hover', 'table-bordered');
	table.innerHTML = `
		<thead>
			<tr>
				<th>№</th>
				<th>Задача</th>
				<th>Статус</th>				
				<th>Действия</th>
				<th>Важность</th>
			</tr>
		</thead>


	`;
	

	list.innerHTML = `
		<tbody>

			
		</tbody>
	`;
		
	table.append(list);
	div.append(table);
	
	getbtnsave(form)
	// getbtnsave(form, app);	
	getbtndel(form, list, div);
	getdonempost(form, list, div);
	getcontediatable(list);
	// getvalue(list);
};



export default start;