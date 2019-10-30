// =====События клавиатуры=====

$('input').keydown(function(event) {
	console.log($(this).val())
}); //клавиша в нажатом состоянии

$('input').keyup(function(event) {
	$('p').text($(this).val())
});//Клавиша больше не в нажатом состоянии

$('input').keypress(function(eventObject) {
	console.log(eventObject.which)
});// ввод символа с клавиатуры