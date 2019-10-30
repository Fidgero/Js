//=====События браузера и страници=====

$(function() {
	$('p').text('DOM лементы загружены')
});//Готовность DOM элементво

$(window).load(function() {
});//Полная загрузка страници

$(window).unload(function() {
	alert('Пользователь, пока!');
}); //выход со страници

$(window).resize(function(event) {
	console.log('размеры окна изменены!')
});//изменение размера(например, окна)

$(window).scroll(function(event) {
	console.log('Страница прокручена')
});//прокрутка элемента