
// tab-button click
var tab_btn = $('.tab-button');
var tab_ct = $('.tab-content');
var tab_count = $('.tab-button').length;

for (let i = 0; i < tab_count; i++) {
    tab_btn.eq(i).on('click', function() {
        tab_btn.removeClass('orange');
        tab_btn.eq(i).addClass('orange');
        tab_ct.removeClass('show');
        tab_ct.eq(i).addClass('show');
    });
};