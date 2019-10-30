// =====События, связанные с мышью=====

$('button').click(function() {
	console.log('Ты кликнул на кнопку');
});//Клик мышью

$('button').dblclick(function() {
	console.log('Ты кликнул на кнопку важды');
});//Двойной клик мышью

/*$('ul li').mouseenter(function(event){
	$(this).css('color', 'red');
});*/ //наведение мыши на элемент

$('ul li').mousedown(function(event){
	$(this).css('color', 'red');
});//Момент нажатия кнопки мыши

$('ul li').mouseup(function(event){
	$(this).css('color', '#333');
});//момент "отжатия" кнопки мыши

$('ul li').mouseover(function(event){
	$(this).css('color', 'blue');
});//мышь наезжает на плошадь эемента

$('ul li').mouseout(function(event){
	$(this).css('color', 'black');
});//мышь покидает площадь элемента

$('ul li').mousemove(function(event){
	$(this).toggleClass('blue');
});//движение мыши над элементом