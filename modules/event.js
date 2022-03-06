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
		console.log('re: ', re);
		if ((re === 'BUTTON') && (nbtn)) {
			const result = confirm('Вы хотите удалить задачу?');
			if (result) {
				let first = event.target.closest('tr');				
				let num = (first.firstElementChild);
				let idd = Number(num.innerHTML);
				console.log('id который удалять:', idd);
				trdel.remove();
				getid();
			// document.querySelectorAll('.count').forEach((item, i) => item.textContent = i + 1);
				
			
				
				let newdata = base.todo.filter(el => el.id != idd);
				
				base.todo = newdata;
				console.log('newdata', newdata);
				
				setTodoLS();
				
				
			}
		}
		setTodoLS();
		

	};

	list.addEventListener('click', delTodo);
}

export const getdonempost = (form, list, div) => {

	function doneTodo(event) {
		event.preventDefault();
		const nbtn = event.target.closest('.btn.btn-success');
		if (nbtn) {
			getTodoLS();
			// console.log('list', list);
			// console.log('event.target.id', event.target.id);

			let first = event.target.closest('tr');
			// console.log('first', first);

			let num = (first.firstElementChild);
			console.log('num', num, Number(num.innerHTML));

			base.check(Number(num.innerHTML));
			setTodoLS();

			let num2 = (num.nextSibling);
			// console.log('num2', num2);
			const post = (num2.nextSibling.innerHTML).trim();
			// console.log('post', post);
			// console.log(num2.nextSibling.classList.add('text-decoration-line-through'));
			num2.nextSibling.classList.add('text-decoration-line-through');
			first.classList = "";
			first.classList.add('table-success');
			setTodoLS();
			let stat = (num2.nextSibling);
			let statu = (stat.nextSibling);

			let tatu = (statu.nextSibling);
			// console.log('status', tatu.innerHTML);


			tatu.innerHTML = 'Выполнена';
			// const id = num.dataset.id
			// console.log('id = num.dataset.id', id);

			// base.check(id);
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
		// console.log("tasks btnmake", tasks, bake);

		for (var i = 0; i < tasks.length; i++) {
			if (tasks[i].contentEditable === "false") {

				let x = event.target.tagName;
				console.log('x: ', x);
				// if (x.includes('<button class="btn btn-secondary">Сохранить</button>')  {
				// 	console.log('x: ', x);
				// }
				if (x === 'BUTTON') {
					console.log(' BUTTON')

					console.log('event.target.closest', event.target.closest('.btn.btn-secondary'));

					const btnm1 = event.target.closest('.btn.btn-secondary');
					if (btnm1) {
						btnm1.textContent = 'Сохранить';
					}
					






					// console.log('нажали на кнопку')

					// event.preventDefault();
					// console.log('btnm.textContent', btnm.textContent);



					// console.log('tasks[i].previousElementSibling.innerHTML', tasks[i].previousElementSibling.textContent);
					tasks[i].setAttribute('contenteditable', 'true');

					let first = event.target.closest('tr');
					// console.log('first', first);

					let num = (first.firstElementChild);
					// console.log('num', num, Number(num.innerHTML));

					// base.check(Number(num.innerHTML));
					// setTodoLS();

					let num2 = (num.nextSibling);
					// console.log('num2', num2, num2.nextSibling);
					// const post = (num2.nextSibling.innerHTML).trim();
					// console.log('post', post);
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


						// console.log('блок сохранить');

						// console.log('tasks[i].previousElementSibling.innerHTML', taski[y].previousElementSibling.textContent);
						tasks[i].setAttribute('contenteditable', 'false');



						setTodoLS();
					

				};


			}


		}



	}

	list.addEventListener('click', btnmake);



};






