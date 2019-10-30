var board = document.getElementsByClassName('board')[0],
	player = document.getElementsByClassName('gamer')[0],
	element, innerElement,
	gamer1 = true,
	gameTable = [[null, null, null], [null, null, null], [null, null, null]],
	nullCount = 9,
	winner = null;

player.innerText = 'Сейчас ходит X';

for (var i = 0; i < 9; i++) {
	element = document.createElement('div');
	element.classList.add('cell');
	innerelement = document.createElement('div');
	innerelement.classList.add('inner-cell');
	innerelement.onclick = tableClick;
	innerelement.setAttribute('x', (i % 3).toString());
	innerelement.setAttribute('y', parseInt(i / 3).toString());
	element.appendChild(innerElement);
	board.appendChild(element);
}
document.getElementsByClassName('button')[0].onclick = reset;

function tableClick() {
	if (this.innerText == '') {
		this.innerText = gamer1 ? 'x' : 'o';
		var y = this.getAttribute('y'), x = this.getAttribute('x');
		gameTable[y][x] = gamer1;
		nullCount--;
		if((gameTable[y][0] === gamer1 && gameTable[y][2] === gamer1) ||
			(gameTable[0][x] === gamer1 && gameTable[2][x] === gamer1) ||
			(gameTable[0][0] === gamer1 && gameTable[2][2] === gamer1) ||
			(gameTable[2][0] === gamer1 && gameTable[0][2] === gamer1)) {
			winner = gamer1;
		}
		gamer1 = !gamer1;
	}
}