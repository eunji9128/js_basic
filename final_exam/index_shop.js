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

function product_dp(obj, num, search_idx) {
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
    if (products.products[0].title.indexOf(search) != -1) {
        console.log(search);
        console.log(products.products[0].title.indexOf(search));
    }
})

document.querySelector('.dp-box').innerHTML = '';
document.querySelector('.dp-box').insertAdjacentHTML('beforeend', `
<h3 class="fs-5 mt-2 fw-bold"><span style="background-color: yellow;">${products.products[0].title.slice(0,2)}</span>${products.products[0].title.slice(2,5)}</h3>`);
