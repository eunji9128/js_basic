var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

// product display - default

var product_row = document.querySelectorAll('.row')[0];

function product_dp(item) {
    
    item.forEach((data) => {
        var card_html = `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data.title}</h5>
            <p>가격 : ${data.price}</p>
            <button class="buy">구매</button>
            </div>`;
        
            product_row.insertAdjacentHTML('beforeend', card_html);
    });

}

product_dp(products);


// product display - expand

var count = 0;

document.querySelector('#more').addEventListener('click', function() {
    count += 1;
    fetch(`https://codingapple1.github.io/js/more${count}.json`)
    .then(res => res.json())
    .then(data => {
        product_dp(data);
        if ( count > 1 ) {
            document.querySelector('#more').classList.add('hide');
        }
    })
    .catch(error => {
        console.log(error);
    });
});

// product order - ascending price

document.querySelector('#price').addEventListener('click', function() {
    products.sort(function(a, b) {
        return a.price - b.price
    });
    
    product_row.innerHTML = '';
    product_dp(products);
});

document.querySelector('#descend').addEventListener('click', function(){
    products.sort(function(a, b) {
        if ( b.title > a.title ) {
            return 1
        } else if ( b.title == a.title ) {
            return 0
        } else {
            return -1
        };
    });
    
    product_row.innerHTML = '';
    product_dp(products);
});

document.querySelector('#filter').addEventListener('click', function() {
    var products_filtered = products.filter(function(a) {
        return a.price <= 60000
    });

    product_row.innerHTML = '';
    product_dp(products_filtered);
})

// cart data set

document.querySelector('.row').addEventListener('click', function(e) {
    var item = e.target.previousElementSibling.previousElementSibling.innerHTML;
    var cart = localStorage.getItem('cart');
    if ( cart == null ) {
        var item_arr = [item];
        item_arr = JSON.stringify(item_arr);
        localStorage.setItem('cart', item_arr);
    } else {
        item_arr = JSON.parse(cart);
        item_arr.push(item);
        item_arr = JSON.stringify(item_arr);
        localStorage.setItem('cart', item_arr);
    }
})
