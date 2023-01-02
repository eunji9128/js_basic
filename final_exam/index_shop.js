// top display - products dp
var products;

$.get({async: false, url: 'store.json'})
    .done(function(data) {
        // product_dp(data, data.products.length);
        products = data;
    })
    .fail(function(error) {
        console.log(error);
    });

function product_dp(obj, num) {
    document.querySelector('.dp-box').innerHTML = '';

    for (var i = 0; i < num; i++) {
        product_layout = `
            <div class="dp-card" draggable="true" data-id="${obj.products[i].id}">
            <img src="img/${obj.products[i].photo}">
            <h3 class="fs-5 mt-2 fw-bold">${obj.products[i].title}</h3>
            <p class="mt-2">${obj.products[i].brand}</p>
            <h4 class="fs-6 mt-3 fw-semibold">가격: ${obj.products[i].price}</h4>
            <button class="black-btn cart-btn">담기</button>
            </div>`; 
            
        document.querySelector('.dp-box').insertAdjacentHTML('beforeend', product_layout);
    }
};

product_dp(products, products.products.length);


// product search

document.querySelector('.dp-search').addEventListener('input', function(e) {
    var search = e.target.value;
    var search_start = [];
    var search_end = [];
    var search_res = [];

    for ( var i = 0; i < products.products.length; i++ ) {
        if (products.products[i].title.includes(search) == true) {
            search_start.push(products.products[i].title.indexOf(search[0]));
            search_end.push(products.products[i].title.indexOf(search[search.length - 1]));
            search_res.push(products.products[i]);
        }
    }
    product_sch(search_res, search_res.length, search_start, search_end);
    if (search == '') {
        product_dp(products, products.products.length);
    };
})

function product_sch(arr, num, start, end) {
    document.querySelector('.dp-box').innerHTML = '';

    for (var i = 0; i < num; i++) {
        product_layout = `
            <div class="dp-card" draggable="true" data-id="${obj.products[i].id}">
            <img src="img/${arr[i].photo}">
            <h3 class="fs-5 mt-2 fw-bold">${arr[i].title.slice(0, start[i])}<span style="background-color: yellow;">${arr[i].title.slice(start[i],end[i]+1)}</span>${arr[i].title.slice(end[i]+1,arr[i].title.length)}</h3>
            <p class="mt-2">${arr[i].brand}</p>
            <h4 class="fs-6 mt-3 fw-semibold">가격: ${arr[i].price}</h4>
            <button class="black-btn cart-btn">담기</button>
            </div>`; 
            
        document.querySelector('.dp-box').insertAdjacentHTML('beforeend', product_layout);
    }
};

// draggable items

var cart_item = [];


document.querySelector('.dp-box').ondragstart = function(e) {
    e.dataTransfer.setData('id', e.target.dataset.id);
};

document.querySelector('.dropzone').ondragover = function(e) {
    e.preventDefault();
};

document.querySelector('.dropzone').ondrop = function(e) {
    this.innerHTML = '';
    var dropzone = document.querySelector('.dropzone');
    var id = e.dataTransfer.getData('id');

    cart_check(cart_item, id);
    cart_add(dropzone, id);
    price_calc();
};

function cart_check(arr, id) {
    if ( arr.length == 0 ) {
        cart_item.push({'id': products.products[id].id, 'title': products.products[id].title, 'amount': 1});
        console.log(cart_item);
    } else {
        for ( var i = 0; i < arr.length; i++ ) {
            if ( cart_item[i].id == products.products[id].id ) {
                cart_item[i].amount += 1;
                console.log(cart_item);
                return i
            }
        }
        cart_item.push({'id': products.products[id].id, 'title': products.products[id].title, 'amount': 1});
        console.log(cart_item);
    }
};

function cart_add(location, id) {
    for ( var i = 0; i < cart_item.length; i++ ) {
        var id = cart_item[i].id;
        console.log(id);
        product_layout = `
                <div class="dp-card" draggable="true" style="color: black;">
                    <img src="img/${products.products[id].photo}">
                    <h3 class="fs-5 mt-2 fw-bold">${products.products[id].title}</h3>
                    <p class="mt-2">${products.products[id].brand}</p>
                    <h4 class="fs-6 mt-3 fw-semibold">${products.products[id].price}</h4>
                    <p class="white-box mt-3 p-1">${cart_item[i].amount}</p>
                </div>`; 
        console.log(products.products[id].title);
        location.insertAdjacentHTML('beforeend', product_layout);
    }
};


// button to cart
document.querySelector('.dp-box').addEventListener('click', function(e) {
    var id = e.target.parentNode.dataset.id;
    var dropzone = document.querySelector('.dropzone');
    dropzone.innerHTML = '';

    cart_check(cart_item, id);
    cart_add(dropzone, id);
    price_calc();
});


// total-price

function price_calc() {
    var total_price = 0;
    
    for (var i = 0; i < cart_item.length; i++) {
        var id = cart_item[i].id;
        console.log('add ', products.products[id].price * cart_item[i].amount, 'id ', id,'amount ', cart_item[i].amount, 'tp ', total_price);
        total_price = total_price + products.products[id].price * cart_item[i].amount;
        console.log(total_price);
    }
    console.log(total_price);
    document.querySelector('#total-price').innerHTML = total_price;
}


// buy-btn modal
document.querySelector('.buy-btn').addEventListener('click', function() {
    document.querySelector('.modal-background').classList.remove('hide');
});

// canvas modal
var canvas = document.querySelector('#bill');
var c = canvas.getContext('2d');
c.font = '20px dotum';
c.fillText('안녕하세요', 30, 20);
c.fillText('반갑습니다', 30, 50);
