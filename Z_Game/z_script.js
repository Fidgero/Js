//Глобальные переменные
var FIELD_SIZE_X = 20;//строки
var FIELD_SIZE_Y = 20;//столбци
var SNAKE_SPEED = 300;//Интервал между перемещениями змейки
var snake = [];//змейка
var direction = 'y+';//направление движения змейки
var gameIsRunning = false;//запушена ли игра
var snake_timer;//таймер змейки
var food_timer;//таймер для еды
var score = 0;//результат

function init(){
	prepareGameField();

	var wrap = document.getElementsByClassName('wrap')[0];

	wrap.style.width = '400px';
	//сотбытия кнопок старт и новая игра
	document.getElementById('snake-start').addEventListener('click', startGame);
	document.getElementById('snake-renew').addEventListener('click', refreshGame);

	//отслеживание клавиш клавиатуры
	addEventListener('keydown', changeDirection);
}

//функция генерации игрового поля
function prepareGameField(){
	//создать таблицу
	var game_table = document.createElement('table');
	game_table.setAttribute('class', 'game-table');

	//генерация ячеек игровой таблицы
	for (var i = 0; i < FIELD_SIZE_X; i++){
		//создание строки
		var row = document.createElement('tr');
		row.className = 'game-table-row row-' + i;

		for (var j = 0; j < FIELD_SIZE_Y; j++){
			//создание ячеек
			var cell = document.createElement('td');
			cell.className = 'game-table-cell cell-' + i + '-' + j;

			row.appendChild(cell); //добавление ячейки 
		}
		game_table.appendChild(row); //добавление строки
	}
	
	document.getElementById('snake-field').appendChild(game_table);
}

//строки игры
function startGame(){
	gameIsRunning = true;
	respawn();//создали змейку

	snake_timer = setInterval(move, SNAKE_SPEED);
	setTimeout(createFood, 5000);
}

//функция расположения змейки на игровом поле
function respawn(){
	//змейка - массив td
	//стартовая длина змейки = 2

	//respawn змейки из центра
	var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
	var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);

	//голова змейки
	var snake_head = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
	snake_head.setAttribute('class', snake_head.getAttribute('class') + 'snake-unit');

	//тело змейки
	var snake_tail = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
	snake_tail.setAttribute('calss', snake_tail.getAttribute('class') + 'snake-unit');

	snake.push(snake_head);
	snake.push(snake_tail);
}

//движение змейки
function move(){
	//console.log('move', direction);
	//сборка классов
	var snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');

	var new_unit;
	var snake_coords = snake_head_classes[1].split('-');
	var coord_y = parseInt(snake_coords[1]);
	var coord_x = parseInt(snake_coords[2]);

	//определяем новую точку
	if (direction == 'x-'){
		new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
	}
	else if (direction == 'x+'){
		new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];
	}
	else if (direction == "y+"){
		new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
	}
	else if (direction == "y-"){
		new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
	}

/*	проверки
	1) new_unit не часть змейки
	2) змейка не ушла за границу поля
	console.log(new_unit); */
	if(!isSnakeUnit(new_unit) && new_unit !== undefined){
		//добавление новой части змейки
		new_unit.setAttribute('class', new_unit.getAttribute('class') + ' snake-unit');
		snake.push(new_unit);

		//проверяем надо ли убрать хвост
		if (!haveFood(new_unit)){

			//находим хвост
			var removed = snake.splice(0, 1)[0];
			var classes = removed.getAttribute('class').split(' ');

			//удоляем хвост
			removed.setAttribute('class', classes[0] + ' ' + classes[1]);
		} 
	}
	else{
		finishTheGame();
	}
}

/*	проверка на змейку
	@param unit	
	@returns {boolean}	*/
function isSnakeUnit(unit) {
	var check = false;

	if (snake.includes(unit)){
		check = true;
	}
	return check;
}

/*	проверка на еду
	@param unit
	@return {boolean}	*/
function haveFood(unit) {
	var check = false;

	var unit_classes = unit.getAttribute('class').split(' ');

	//если еда
	if (unit_classes.includes('food-unit')) {
		check = true;
		createFood();

		score++;
	}
	return check;
}

//Создание еды
function createFood(){
	var foodCreated = false;

	while (!foodCreated) {
		//рандом
		var food_x = Math.floor(Math.random() * FIELD_SIZE_X);
		var food_y = Math.floor(Math.random() * FIELD_SIZE_Y);

		var food_cell = document.getElementsByClassName('cell-' + food_y + '-' + food_x)[0];
		var food_cell_classes = food_cell.getAttribute('class').split(' ');

		//проверка на змейку
		if (!food_cell_classes.includes('snake-unit')) {
			var classes = '';
			for (var i = 0; i < food_cell_classes.length; i++){
				classes += food_cell_classes[i] + ' ';
			}

			food_cell.setAttribute('class', classes + 'food-unit');
            foodCreated = true;
		}
	}
}

/*	Изменение направления движения змейки
	@param e - событие	*/
function changeDirection(e){
	console.log(e);
	switch (e.keyCode) {
		case 37: //клавиша влево
			if (direction != 'x+') {
				direction = 'x-'
			}
			break;
		case 38: //клавиша вверх
			if (direction != 'y-') {
				direction = 'y+'
			}
			break;
		case 39://клавиша вправо
			if (direction != 'x-') {
				direction = 'x+'
			}
			break;
		case 40:
			if (direction != 'y+') {
				direction = 'y-'
			}
			break;
	}
}

//функция завершения игры
function finishTheGame(){
	gameIsRunning = false;
	clearInterval(snake_timer);
	alert('Вы проиграли! Ваш результат: ' + score.toString());
}

//новая игра
function refreshGame(){
	location.reload();
}

//иницилизация
window.onload = init;