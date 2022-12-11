# js_basic

## 이벤트 함수
### 이벤트 버블링
```html
<div class='first-box'>
    <div class='second-box'>
        <h4 class='title'>title</h4>
    </div>
</div>
```
```js
document.querySelector('.first-box').addEventListener('click', function() {
    document.querySelector('.first-box').classList.remove('show');
});
```
- 위와 같이 first-box div를 클릭했을 때 first-box 를 숨기는 이벤트 코드를 작성했어도, second-box or title 클릭 시에도 first-box 가 사라지게 된다
- 이유는 이벤트 버블링 때문인데, html에서는 특정 태그에서 발생한 이벤트가 상위 개체까지 영향을 미치는 것을 의미한다 > 여기에서는 title 클릭 시 title click > second-box click > first-box click 이라는 모든 이벤트가 발생한다

### 이벤트 관련 함수
```js
document.querySelector('.first-box').addEventListener('click', function(e) {
    e.target; // 사용자가 실제 클릭한 개체
    e.currentTarget; // 이벤트가 발생한 개체 (this 라고 사용해도 됨)
    e.preventDefault(); // 실행 시 이벤트 기본 동작을 중단
    e.stopPropagation(); // 실행 시 상위 개체로의 이벤트 버블링을 중단
    document.querySelector('.first-box').classList.remove('show');
});
```
```js
document.querySelector('.first-box').addEventListener('click', function(e) {
    if ( e.target == document.querySelector('.first-box') ) {
        document.querySelector('.first-box').classList.remove('show');
    };
});
```
- 위 이벤트 버블링 예시를 막기 위해서는 실제 클릭한 요소 == 내가 의도한 개체 인지 조건을 만들어 이벤트 실행할 수 있다

### jQuery 이벤트 개체
```js
console.log(e.target);
console.log(document.querySelector('.first-box'));
console.log($('.first-box'));
```
- 실제 클릭한 요소가 first-box 일 경우 e.target과 document.querySelector('.first-box')의 출력 결과는 동일하다
- 하지만 jQuery selector 출력 결과는 다음과 같이 형태가 다르므로, 조건문을 사용할 때 $(e.target)과 비교하거나 js 문법을 사용하는 게 좋다
    - ![image](https://user-images.githubusercontent.com/80051721/206890538-58f598e1-dae3-4ee9-b02a-1bda4fc09210.png)

### 이벤트 버블링 응용
```html
<ul class="list">
    <li class="tab-button" data-id="0">Products</li>
    <li class="tab-button orange" data-id="1">Information</li>
    <li class="tab-button" data-id="2">Shipping</li>
    <li class="tab-button" data-id="3">Others</li>
</ul>
```
```js
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
```
- 기존에는 반복문을 이용해 tab 클릭 기능을 구현했으나, 이 방법은 이벤트 리스너가 각 tab-button 마다 실행되어 성능적으로 좋지 않다(이벤트 리스너는 RAM을 사용함)
- 이벤트 버블링 특징을 이용하여 상위 개체에 이벤트 리스너만 하나 심어놓고 사용할 경우 이벤트 리스너를 적게 사용할 수 있다(모든 tab-button 클릭 시 상위 개체인 list 이벤트 발생)
- 또한 이벤트 함수 + data 속성 부여를 사용하여 반복문을 사용하지 않고도 tap 클릭 기능을 동일하게 구현할 수 있다
    - data-{name} 속성 사용 시 원하는 값을 개체에 심어놓을 수 있다
    - 개체.dataset.{name} 을 통해 값을 사용할 수 있다
    - (참고) dataset 문법은 explorer 11+ 에서만 작동


## 유용한 JS Libraries
### Swiper
- https://swiperjs.com/get-started#use-swiper-from-cdn
- 캐러셀 호환 잘되고 예쁘게 만들 수 있는 라이브러리

### Chart.js
- https://cdnjs.com/libraries/Chart.js
- https://www.chartjs.org/docs/latest/
- 웹페이지에서 차트 넣을 때 유용한 라이브러리(어드민, 통계, 주식/코인 서비스 등)

### AOS(Animate On Scroll)
- https://github.com/michalsnik/aos
- https://michalsnik.github.io/aos/
- 스크롤 내리면 요소가 서서히 등장하는 애니메이션을 만들고 싶을 때 유용한 라이브러리

### EmailJS
- https://www.emailjs.com/docs/introduction/how-does-emailjs-work/
- JS 만으로도 이메일 전송이 가능하게 해주는 라이브러리(원래 이메일 전송은 서버에서 진행, 여기서는 gmail 등 서버를 잠깐 빌리는 형태(?))

### Lodash
- https://lodash.com/
- array, object, 문자, 숫자 자료 처리를 편하게 해주는 기본 함수 제공 라이브러리(초보라면 이 라이브러리 사용 전에 알고리즘 짜는 연습하는 것을 추천)

### React or Vue
- UI 재활용이 자주 필요한 사이트거나 모바일처럼 페이지 이동 없이 동작하는 Single Page Application 만들 때 유용한 라이브러리

### fullpage.js
- https://alvarotrigo.com/fullPage/ (동작예시)
- https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs
- 웹페이지를 ppt처럼 만들어주는 라이브러리
