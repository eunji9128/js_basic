var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

products_size = document.querySelectorAll('.card-title').length;

for ( i = 0; i < products_size; i++ ) {
    document.querySelectorAll('.card-title')[i].innerHTML = products[i].title;
    document.querySelectorAll('.card-price')[i].innerHTML = products[i].price;
};