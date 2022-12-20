// top display - products dp
var products = 0;

$.get('store.json')
    .done(function(data) {
        products = data;
        product_dp(data, data.products.length);
    })
    .fail(function(error) {
        console.log(error);
    });

// console.log(products);

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

