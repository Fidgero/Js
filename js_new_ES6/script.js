// Интеполяция
let name = "Ivan",
	age = 30,
	mail = 'ex@mail.ru';
document.write('Пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес: ' + mail);

let name = "Ivan",
	age = 30,
	mail = 'ex@mail.ru';
document.write('Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}');

// let
function varTest() {
	var x = 1;
	if (true) {
		var x = 2; // Та же переменная!
		console.log(x); // 2
	}
	console.log(x); // 2
}

function letTest() {
	let x = 1;
	if (true) {
		let x = 2; // Другая переменная
		console.log(x); // 2
	}
	console.log(x); // 1
}

// const
// var-let
function makeArray(){
	var items = [];
	//var and let
	for (var i = 0; i < 10; i++) {
		var item = function(){
			console.log(i);
		};
		items.push(item);
	}
	return items;
}
var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

// Стрелочные функции
let fun = () => {
	console.log(this);
};

fun();
let obj = {
	number: 5,
	sayNumeber: function() {
		let say = () => {
			console.log(this);
		};
		say();
	}
};

obj.sayNumeber();

// Раньше
function calcOrDouble(number, basis) {
	basis = basis || 2;
	console.log(number * basis);
}
calcOrDouble(3,5);
calcOrDouble(6);

// ES6
function calcOrDouble(number, basis = 2) {
	// basis = basis || 2; ES5
	console.log(number * basis);
}
calcOrDouble(3,5);
calcOrDouble(6);

// Классы
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	calcArea() {
		return this.height * this width;
	}
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

// Spread-ператоры
let video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['worldpress', 'livejournal', 'blogger'],
	internet = [video, blogs, 'vk', 'facebook'];

console.log(internet);	

let video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['worldpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);	

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
	console,log(a + b + c);
}
let numbers = [2, 5, 7];

log(..numbers);