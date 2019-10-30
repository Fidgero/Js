// взаимодействие с эементами

$('h2, p') //первый, второй, третий и т.д.
$('h2 span') // outer и inner
$('h2 > span') // parent > chill
$('h2 + p') // prev + next
$('h2 ~ p').css('border', '2px solid #000'); // prev ~ next