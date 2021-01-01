
const dragAndDrop = () => {
	const placeAdd = document.querySelector('.js-addCard');
	const buttonAdd = document.querySelector('.js-add');
	const card = document.querySelector('.js-card');
	const cells = document.querySelectorAll('.js-cell');

	let cards = document.querySelectorAll('.js-card');
	cards = Array.prototype.slice.call(cards);

	const dragStart = function () {
		setTimeout(() => {
			this.classList.add('hide');
		}, 0);
	};
	const dragEnd = function () {
		this.classList.remove('hide');
	};
	const dragOver = function (evt) {
		evt.preventDefault();
	};
	const dragEnter = function () {
		this.classList.add('hover');
	};
	const dragLeave = function () {
		this.classList.remove('hover');
	};
	const dragDrop = function () {
		const selectedCard = document.querySelector('.hide');
		this.append(selectedCard);
		this.classList.remove('hover');
	};
	function addEventForCards() {
		cards.forEach((card) => {
			card.addEventListener('dragstart', dragStart);
			card.addEventListener('dragend', dragEnd);
		});
	};
	const addCard = function () {
		let newCard = card.cloneNode(true);
		cards.push(newCard);
		placeAdd.append(newCard);
		addEventForCards();
	};

	cells.forEach((cell) => {
		cell.addEventListener('dragover', dragOver);
		cell.addEventListener('dragenter', dragEnter);
		cell.addEventListener('dragleave', dragLeave);
		cell.addEventListener('drop', dragDrop);
	});

	addEventForCards();

	buttonAdd.addEventListener('click', addCard);
};
dragAndDrop();
