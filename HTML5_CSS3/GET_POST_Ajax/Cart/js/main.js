var cart = {}; //корзина

function init() {
	//Читаем файл goods.json
	$.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
	//Вывод на страницу
	console.log(data);
	var out='';
	for (var key in data) {
		out +='<div class="cart">';
		out +=`<p class="name">${data[key].name}</p>`;
		out +=`<img src="images/${data[key].img}" alt="">`;
		out +=`<div class="cost">${data[key].cost}</div>`;
		out +=`<button class="add-to-cart" data-id=${key}">Купить</button>`;
		out +='</div>';
	}
	$('.goods-out').html(out);
	$('.add-to-cart').on('click', addToCart);
}

function addToCart() {
	//Добавляем товар в корзину
	var id = $(this).attr('data-id');
	//console.log(id);
	if (cart[id]==undefined) {
		cart[id] = 1; //если в корзине нет товара - делаем равным 1
	}
	else {
		cart[id]++; //если такой товар есть - увеличивают на единицу
	}
	showMiniCart();
	saveCart();
}
function saveCart() {
	//Сохраняем корзину в LocalStorage
	LocalStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function showMiniCart() {
	//Показываем мини корзину
	var out="";
	for (var key in cart) {
		out +=key + ' --- '+ cart[key]+'<br>';
	}
	$('.mini-cart').html(out);
}

function laodCart() {
	//Проверяю есть ли в localStorage запись cart
	if (localStorage.getItem('cart')) {
		//если есть - расшифровываю и записываю в переменную cart
		cart = JSON.parse(localStorage.getItem('cart'));
		showMiniCart();
	}
}

$(document).ready(function () {
	init();
	laodCart();
});