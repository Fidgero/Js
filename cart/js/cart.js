var cart = {};
function loadCart() {
	if(localStorage.getItem('cart')) {
		cart = JSON.parse(localStorage.getItem('cart'));
		showCart();
	}else {
		$('.main-cart').html('Корзина пуста!');
	}
}
function showCart() {
	if (!isEmpty(cart)) {
		$('.main-cart').html('Корзина пуста!');
	}else {
		$.getJSON('goods.json', function(data) {
			var goods = data;
			var out = '';
			for (var id in cart) {
				out +=`<button data-id="${id}" class="del-goods">x</button>`;
				out +=`<img> src="images\\${goods[id].img}">`;
				out +=`${goods[id].name }`;
				out +=`<button data-id="${id}" class="minus-goods">-</button>`;
				out +=`${cart[id]}`;
				out +=`<button data-id="${id}" class="plus-goods">+</button>`;
				out +=cart[id]*goods[id].cost;
				out +='<br>';
			}
			$('.main-cart').html(out);
			$('.del-goods').on('click', delGoods);
			$('.plus-goods').on('click', plusGoods);
			$('.minus-goods').on('click', minusGoods);
		});
	}
}