# js_basic

## scroll event
### window scroll event
```js
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    console.log(window.scrollX);
    window.scrollTo(0, 100); // (x, y)
    window.scrollBy(0, 100); // (x, y)
});

// JQuery
$(window).on('scroll', function() {
    console.log($(window).scrollTop());
    $(window).scrollTop(100);
});
```
- 전체 페이지의 스크롤 이벤트를 이용하고 싶을 경우 window.addEventListener('scroll', function(){}) 을 이용하면 된다
    - window > document > html 개체 의 범위 개념
- window.scrollX or Y: X방향 혹은 Y방향으로 스크롤한 거리를 px 단위 값으로 반환
- window.scrollTo(x, y): x, y 값 만큼 스크롤 강제 이동
- window.scrollBy(x, y): x, y 값 만큼 현재 위치에 더해 스크롤 강제 이동
- JQuery에서는 scrollTop을 사용하는데, 아무 파라미터가 없을 경우 스크롤한 거리를 반환, 파라미터가 있을 경우 값만큼 Y방향으로 스크롤 강제 이동 해준다

### div scroll event
```html
<div class="lorem" style="width: 200px; height: 100px; overflow-y: scroll">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptas voluptatum minus praesentium fugit debitis at, laborum ipsa itaque placeat sit, excepturi eius. Nostrum perspiciatis, eligendi quae consectetur praesentium exercitationem.
</div> 
```
```js
$('.lorem').on('scroll', function(){
    var scroll_top = document.querySelector('.lorem').scrollTop;
    var scroll_heignt = document.querySelector('.lorem').scrollHeight;
    var client_height = document.querySelector('.lorem').clientHeight;
})
```
- 위와 같이 overflow-y: scroll 속성으로 스크롤바를 가진 div 박스가 있을 경우에는 해당 클래스 셀렉 후 scrollTop, scrollHeight, clientHeight 속성을 사용할 수 있다
    - scrollTop: scrollX와 같음, scroll top 위치를 반환
    - scrollHeight: 전체 scroll의 높이를 반환
    - clientHeight: 현재 화면에 보여지는 div의 높이를 반환(여기서는 100px)
- scroll height = 맨 아래로 내린 scroll top + client height 가 되어야 하지만, 브라우저, OS에 따라 약간의 오차가 있다 > 조건문을 사용하여 비교할 때는 약간의 오차를 가지고 비교해주는 것이 안전하다

### Boorstrap scroll option
```css
:root {
    scroll-behavior: auto;
}
```
- (참고) bootstrap 설치하여 사용 시 bootstrap 기본 스타일로 모든 스크롤 동작에 딜레이가 적용되어 있다 > 이를 없애기 위해서는 root 에서 scroll-behavior: auto로 설정해주면 된다


### scroll event 사용 시 주의점
1. scroll event listener 안의 코드는 1초에 60번씩 실행되므로, 성능 저하를 막기 위해서는 scroll event listener는 scroll bar 당 하나만 사용하는 것이 좋다
2. event listener가 무한으로 실행되지 않도록 하기 위해서는 event listener를 제거해주어야 한다(document.querySeletor('.className').removeEventListener('scroll', callbackfunction);)
```js
var lorem_scroll = function() {
    var scroll_top = document.querySelector('.lorem').scrollTop;
    var scroll_height = document.querySelector('.lorem').scrollHeight;
    var client_height = docuement.querySelector('.lorem').clientHeight;

    if ( scroll_top + client_height >= (scroll_height - 10) ) {
        alert('약관의 마지막입니다');
        document.querySelector('.lorem').removeEventListener('scroll', lorem_scroll); // addEventListener 와 이벤트 형태, 콜백함수명 동일해야 함
    };
};

document.querySelector('.lorem').addEventListener('scroll', lorem_scroll);
```
- 이벤트 리스너를 제거할 때 중요한 것은 1) 콜백 함수 명을 removeEventListener의 두번째 파라미터(default)로 사용하기 때문에, 익명 함수를 사용한 이벤트 리스너는 제거할 수 없다
- 아무튼 이벤트 리스너를 추가했을 때와 같은 파라미터를 제거 시에도 넣어주어야 한다

### 현재 페이지의 스크롤 값
```js
document.querySelector('html').scrollTop;
document.querySelector('html').scrollHeight;
document.querySelector('html').clientHeight;
window.scrollY; // html clientHeight 와 같음
```
- 현재 페이지 스크롤 값을 보려면 html tag의 값을 보면 된다 > 현재 페이지 = html tag
- 다만, scrollHeight 값은 페이지 로딩이 다 끝난 후에 가장 정확하기 때문에 위의 값을 사용하기 위해서는 body tag 마지막에 코딩하는 것이 가장 좋다

