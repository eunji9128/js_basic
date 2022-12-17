// modal bg click
document.querySelector('.black-bg').addEventListener('click', function(e) {

    console.log(e.target);
    console.log($('.black-bg'));

    if ( e.target == document.querySelector('.black-bg') ) {
        document.querySelector('.black-bg').classList.remove('show-modal');
    };

});

//scroll progress

window.addEventListener('scroll', function(){
    var scroll_top = document.querySelector('html').scrollTop;
    var scroll_height = document.querySelector('html').scrollHeight;
    var client_height = document.querySelector('html').clientHeight;
    var scroll_progress = scroll_top / (scroll_height - client_height);
    document.querySelector('.progress-bar').style.width = (scroll_progress * 100) + '%';
    // console.log(scroll_progress);
})


// navbar-toggler click
document.querySelector('.navbar-toggler')
    .addEventListener('click', function () {
        document.querySelector('.list-group')
            .classList.toggle('slide-down');
    });

// modal-btn click
$('#login').on('click', function () {
    $('.black-bg').addClass('show-modal');
});

//form-input detect
$('#send').on('click', function (e) {
    var email = $('.form-id').val().trim();
    var pw = $('.form-pw').val().trim();

    if (email == '') {
        e.preventDefault();
        alert('아이디를 입력하세요');
    } else if (/\S+@\S+\.\S+/.test(email) == false) {
        e.preventDefault();
        alert('이메일 형식이 아닙니다');
    } else if (pw == '') {
        e.preventDefault();
        alert('패스워드를 입력하세요')
    } else if (/[A-Z]/.test(pw) == false) {
        e.preventDefault();
        alert('패스워드에 대문자 하나 이상 포함해주세요')
    } else if (pw.length < 6) {
        e.preventDefault();
        alert('패스워드를 6자 이상 입력하세요');
    }
});

// dark-mode toggle
var count = 0;

document.getElementsByClassName('badge')[0].addEventListener('click', function () {
    count += 1;
    if (count % 2 == 0) {
        document.getElementsByClassName('badge')[0].innerHTML = 'Dark 🔄';
    } else {
        document.getElementsByClassName('badge')[0].innerHTML = 'Light 🔄';
    }
});

// alert timer
var timer_count = 5;

var timer = setInterval(function () {
    timer_count -= 1;
    document.querySelector('.count').innerHTML = timer_count;
}, 1000);

setTimeout(function () {
    $('.alert').hide();
    clearTimeout(timer);
}, 5000);

// slide-btn
var slide_num = 1;
var slide_container = document.querySelector('.slide-container');

document.querySelector('.slide-1').addEventListener('click', function () {
    slide_container.style.transform = 'translateX(0)';
    slide_num = 1;
});
document.querySelector('.slide-2').addEventListener('click', function () {
    slide_container.style.transform = 'translateX(-100vw)';
    slide_num = 2;
});
document.querySelector('.slide-3').addEventListener('click', function () {
    slide_container.style.transform = 'translateX(-200vw)';
    slide_num = 3;
});

document.querySelector('.slide-next').addEventListener('click', function () {
    slide_next();
});
document.querySelector('.slide-prev').addEventListener('click', function () {
    slide_prev();
});

function slide_next() {
    slide_num = (slide_num % 3) + 1;
    slide_container.style.transform = 'translateX(-' + (slide_num - 1) + '00vw)';
}

function slide_prev() {
    if (slide_num == 1) {
        slide_num = 3;
    } else {
        slide_num -= 1;
    }
    
    slide_container.style.transform = 'translateX(-' + (slide_num - 1) + '00vw)';
}


// slide drag
var drag_start = 0;
var drag_end = 0;
var drag_dist = 0;
var drag = false;

slide_container.addEventListener('mousedown', function(e) {
    drag_start = e.clientX + 575 * (slide_num - 1);
    // console.log(drag_start);
    drag = true;
})
slide_container.addEventListener('mousemove', function(e) {
    if ( drag ) {
        drag_dist = (e.clientX + 575 * (slide_num - 1)) - drag_start;
        slide_container.style.transform = `translateX(${drag_dist - 575 * (slide_num - 1)}px)`;
    };
    
})
slide_container.addEventListener('mouseup', function(e) {
    drag = false;
    if ( drag_dist < -250 && drag_dist < 0 ) {
        slide_next();
    } else if ( drag_dist >= -250 && drag_dist < 0 ) {
        slide_container.style.transform = `translateX(-${(slide_num - 1)}00vw)`;
    } else if ( drag_dist > 250 && drag_dist > 0 ) {
        slide_prev();
    } else {
        slide_container.style.transform = `translateX(-${(slide_num - 1)}00vw)`;
    }
})

// navbar scroll effect
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        document.querySelector('.navbar-brand').style.fontSize = "20px";
    } else {
        document.querySelector('.navbar-brand').style.fontSize = "30px";
    }
});

// lorem scroll effect
var lorem_scroll = function() {
    var scroll_top = document.querySelector('.lorem').scrollTop;
    var scroll_height = document.querySelector('.lorem').scrollHeight;
    var client_height = document.querySelector('.lorem').clientHeight;
    if (scroll_top + client_height >= (scroll_height - 10)) {
        alert('약관의 마지막 줄입니다');
        document.querySelector('.lorem').removeEventListener('scroll', lorem_scroll);
    };
}

document.querySelector('.lorem').addEventListener('scroll', lorem_scroll);