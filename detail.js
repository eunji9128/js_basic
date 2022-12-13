
// tab-button click
var tab_btn = $('.tab-button');
var tab_ct = $('.tab-content');
var tab_count = $('.tab-button').length;

// for (let i = 0; i < tab_count; i++) {
//     tab_btn.eq(i).on('click', function() {
//         tab_open(i);
//     });
// };

document.querySelector('.list').addEventListener('click', function(e) {
    tab_open(e.target.dataset.id);
});

function tab_open(num) {
    tab_btn.removeClass('orange');
    tab_btn.eq(num).addClass('orange');
    tab_ct.removeClass('show');
    tab_ct.eq(num).addClass('show');
}

// product display
var car = { name: '소나타', price: 50000};

document.querySelector('.name').innerHTML = car.name;
document.querySelector('.price').innerHTML = car.price;

// product form-select
var form_select = document.querySelectorAll('.form-select')[0];
var form_option = document.querySelectorAll('.form-select')[1];

var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];

form_select.addEventListener('input', function() {
    if ( this.value == 'shirt' ) {
        form_option.classList.remove('form-hide');
        form_option.innerHTML = '';
        shirts.forEach(function(data){
            form_option.insertAdjacentHTML('beforeend', `<option>${data}</option>`);
        });
    } else if ( this.value == 'pants' ) {
        form_option.classList.remove('form-hide');
        form_option.innerHTML = '';
        pants.forEach(function(data){
            form_option.insertAdjacentHTML('beforeend', `<option>${data}</option>`);
        });

    } else {
        form_option.classList.add('form-hide');
    }
});