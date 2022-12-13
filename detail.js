
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

form_select.addEventListener('input', function() {
    if ( this.value == 'shirt' ) {
        var options = '<option>95</option><option>100</option>';
        form_option.classList.remove('form-hide');
        form_option.innerHTML = options;
    } else if ( this.value == 'pants' ) {
        var options = '<option>28</option><option>30</option>';
        form_option.classList.remove('form-hide');
        form_option.innerHTML = options;
    } else {
        form_option.classList.add('form-hide');
    }
});