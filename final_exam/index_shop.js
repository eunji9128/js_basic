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
            <div class="dp-card">
            <img src="img/${obj.products[i].photo}">
            <h3 class="fs-5 mt-2 fw-bold">${obj.products[i].title}</h3>
            <p class="mt-2">${obj.products[i].brand}</p>
            <h4 class="fs-6 mt-3 fw-semibold">가격: ${obj.products[i].price}</h4>
            <button class="black-btn">담기</button>
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
            <div class="dp-card">
            <img src="img/${arr[i].photo}">
            <h3 class="fs-5 mt-2 fw-bold">${arr[i].title.slice(0, start[i])}<span style="background-color: yellow;">${arr[i].title.slice(start[i],end[i]+1)}</span>${arr[i].title.slice(end[i]+1,arr[i].title.length)}</h3>
            <p class="mt-2">${arr[i].brand}</p>
            <h4 class="fs-6 mt-3 fw-semibold">가격: ${arr[i].price}</h4>
            <button class="black-btn">담기</button>
            </div>`; 
            
        document.querySelector('.dp-box').insertAdjacentHTML('beforeend', product_layout);
    }
};