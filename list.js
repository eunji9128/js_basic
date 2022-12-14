var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

// product display - default

function product_dp(item) {
    
    item.forEach((data) => {
        var card_html = `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data.title}</h5>
            <p>가격 : ${data.price}</p>
            </div>`;
        
            document.querySelector('.row').insertAdjacentHTML('beforeend', card_html);
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
