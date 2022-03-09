import { form, div, table, list } from "./start.js";
import { base, getuserName } from "./base.js";
import { getTodoLS, setTodoLS, } from "./local.js";
import { getid } from "./base.js";

export const getbtndel = (form, list, div) => {

	function delTodo(event) {
		event.preventDefault();
		const nbtn = event.target.closest('.btn.btn-danger');
		const trdel = event.target.closest('tr');

		var re = event.target.tagName;

		if ((re === 'BUTTON') && (nbtn)) {

			const result = confirm('Вы хотите удалить задачу?');
			if (result) {
				let first = event.target.closest('tr');
				
				let num = (first.firstElementChild);
				
				let idd = Number(num.innerHTML);
				console.log('id который удалять:', idd);



				trdel.remove();

				let newdata = base.todo.filter(el => el.id != base.todo[idd - 1].id);

				console.log('newdata', newdata);
				base.todo = newdata;

				setTodoLS();

				getid();
			}

		}

	};

	list.addEventListener('click', delTodo);
}

export const getdonempost = (form, list, div) => {

	function doneTodo(event) {
		event.preventDefault();
		const nbtn = event.target.closest('.btn.btn-success');
		if (nbtn) {
			getTodoLS();


			let first = event.target.closest('tr');


			let num = (first.firstElementChild);
			console.log('num', num, Number(num.innerHTML));

			base.check(Number(num.innerHTML));
			setTodoLS();

			let num2 = (num.nextSibling);

			const post = (num2.nextSibling.innerHTML).trim();

			// console.log(num2.nextSibling.classList.add('text-decoration-line-through'));
			num2.nextSibling.classList.add('text-decoration-line-through');
			first.classList = "";
			first.classList.add('table-success');
			setTodoLS();
			let stat = (num2.nextSibling);
			let statu = (stat.nextSibling);

			let tatu = (statu.nextSibling);



			tatu.innerHTML = 'Выполнена';

			setTodoLS();

		};

	};

	list.addEventListener('click', doneTodo);
}


export const getcontediatable = (list) => {

	function btnmake(event) {
		event.preventDefault();
		let tasks = document.getElementsByClassName('task');


		const bake = document.querySelector('.task');


		for (var i = 0; i < tasks.length; i++) {
			if (tasks[i].contentEditable === "false") {

				let x = event.target.tagName;

				if (x === 'BUTTON') {
					console.log(' BUTTON')

					console.log('event.target.closest', event.target.closest('.btn.btn-secondary'));

					const btnm1 = event.target.closest('.btn.btn-secondary');
					if (btnm1) {
						btnm1.textContent = 'Сохранить';
					}


					// console.log('tasks[i].previousElementSibling.innerHTML', tasks[i].previousElementSibling.textContent);
					tasks[i].setAttribute('contenteditable', 'true');

					let first = event.target.closest('tr');


					let num = (first.firstElementChild);


					let num2 = (num.nextSibling);

					let im = i;


					tasks[i].addEventListener('input', function (e) {
						// console.log('e.target.innerHtml', e.target.previousElementSibling.innerHTML);
						// console.log('tasks[i].previousElementSibling.innerHTML', tasks[im].previousElementSibling.innerHTML);

						if (tasks[im].previousElementSibling.textContent == e.target.previousElementSibling.textContent) {
							base.todo[im].post = num2.nextSibling.textContent.trim();


							setTodoLS();
						};
					});
				};






			} else {
				let bx = event.target.tagName;
				if (bx === 'BUTTON') {
					console.log('bx: ', bx);

					const btnm2 = event.target.closest('.btn.btn-secondary');
					if (btnm2) {
						btnm2.textContent = "Редактировать";
					}

					// console.log('tasks[i].previousElementSibling.innerHTML', taski[y].previousElementSibling.textContent);
					tasks[i].setAttribute('contenteditable', 'false');



					setTodoLS();


				};


			}


		}



	}

	list.addEventListener('click', btnmake);



};






