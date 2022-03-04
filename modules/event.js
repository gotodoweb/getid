import { form, div, table, list } from "./start.js";
import { base }  from "./base.js";

export const getbtndel = (form, list, div) => {

	function delTodo(event) {
		event.preventDefault();
		const nbtn = event.target.closest('.btn.btn-danger');
		const trdel = event.target.closest('tr');
		// console.log('trdel', trdel);
		if (nbtn) {

			trdel.remove();
			document.querySelectorAll('.goods__row').forEach((item, i) => item.textContent = i);
		}
		
	}

	list.addEventListener('click', delTodo);
}



export const getdonempost = (form, list, div) => {

	function doneTodo(event) {
		event.preventDefault();
		const nbtn = event.target.closest('.btn.btn-success');
		if (nbtn) {

			// console.log('list', list);
			console.log('event.target.id',event.target.id);

			let first = event.target.closest('tr');
			// console.log('first', first);

			let num = (first.firstElementChild);
			console.log('num', num, Number(num.innerHTML));

			base.check(Number(num.innerHTML));

			let num2 = (num.nextSibling);
			// console.log('num2', num2);
			const post = (num2.nextSibling.innerHTML).trim();
			// console.log('post', post);
			// console.log(num2.nextSibling.classList.add('text-decoration-line-through'));
			num2.nextSibling.classList.add('text-decoration-line-through')
			first.classList.remove('table-light');
			first.classList.add('table-success');

			// let stat = (num2.nextSibling);
			// let statu = (stat.nextSibling);

			// let tatu = (statu.nextSibling);
			// console.log('status', tatu.innerHTML);


			// tatu.innerHTML = 'Выполнена';
			const id = num.dataset.id
			// console.log('id', id);
			base.check(id);

			
		};


	};

	list.addEventListener('click', doneTodo);
}


