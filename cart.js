//  load cart

function cart_list(item) {
    
    var list = `<p>${item}</p>`
    document.querySelector('.cart-list').insertAdjacentHTML('beforeend', list);

};

var cart = localStorage.getItem('cart');
cart = JSON.parse(cart);

cart.forEach((data) => {
    cart_list(data);
})