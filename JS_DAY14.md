# js_basic

## 스크롤 UI
### fixed, sticky
```html
<body style="height: 2000px;">
    <div class="box">
        <span class="text">lorem ipsum</span>
        <img class="image" src="#">
    </div>
</body>
```
```css
.box {
    background: grey;
    height: 1000px;
    margin-top: 200px;
}
.text {
    float: left;
    width: 40%;
}
.image {
    float: right;
    width: 50%;
    position: sticky;
    top: 100px;
}
```
- 개체를 화면 특정 위치에 고정시키기 위해 position: fixed or position: sticky를 사용할 수 있다
- fixed: 브라우저 기준으로 항상 지정된 위치에 고정시켜 준다
- sticky: 기본적으로 부모 개체에 종속되어 위치하나 좌표 조건에 해당하는 경우 그 위치에 고정되며, 부모 개체 밖으로는 벗어나지 않아 부모 개체 바운더리에 맞닿는 지점에서 위치 고정은 해제된다(예를 들어 스크롤 다운 시 sticky 개체가 부모 개체를 벗어나게 될 경우 sticky 해제)
    - (참고) sticky 속성은 고정 조건으로 좌표 속성과 함께 적용되어야 한다

### 수식 활용하여 스크롤 UI 구축
```js
window.addEventListener('scroll', function() {
    var scroll_posy = this.window.scrollY;
    console.log(scroll_posy); 
    var scroll_arr = [
        {'name': 'card1', 'start': 3940, 'end': 4400}, 
        {'name': 'card2', 'start': 4440, 'end': 4900},
        {'name': 'card3', 'start': 4940, 'end': 5400},];

    for ( var i = 0; i < scroll_arr.length; i++ ) {
        var y = (-1/460) * scroll_posy + (scroll_arr[i].end/460);
        var scale = (-0.1/460) * scroll_posy + ((scroll_arr[i].start*0.1+460)/460);
        
        this.document.querySelectorAll('.card-box')[i].style.opacity = y;
        this.document.querySelectorAll('.card-box')[i].style.transform = `scale(${scale})`;
    }
});
```
- 위와 같이 스크롤 이벤트를 줄 때 transition과 같은 효과를 주기 위해서는 변하는 속석 값(여기서는 opacity, scale)에 수식을 활용한 변수를 적용하는 방법이 있다
- 1차 함수를 이용하여 스크롤 변화 값에 따라 속성 값이 비례하여 변하는 a, b 값을 찾아 수식으로 선언해주어 사용한다

## drag animation
### mouse event
```js
var start = 0;
var drag = false;

document.querySelector('.slide-container').addEvenetListener('mousedown', function(e) {
    drag = true;
    console.log(e.clientX); // 마우스 클릭한 위치 좌표
    start = e.clientX;
});
document.querySelector('.slide-container').addEventListener('mousemove', function(e) {
    if ( drag ) {
        console.log(e.clientX); // 이동하며 변하는 마우스 위치 좌표
        console.log(e.clientX - start); // 마우스 이동 거리
    }
});
document.querySelector('.slide_container').addEventListener('mouseup', function(e) {
    drag = false;
    console.log(e.clientX); // 마우스 클릭 후 뗄 때 위치 좌표
    console.log(e.clientX - start); // 마우스 최종 이동 거리
});
```
- mouse drag 이벤트를 만들기 위해서는 1) mouse down, 2) mouse move, 3) mouse up 3단계 스텝의 이벤트 리스너가 필요하다(클릭 > 드래그 > 놓기)
- 각 이벤트 리스너의 e.clientX 값은 같은 마우스 위치 좌표지만 다른 상황의 좌표를 나타냄을 주의해야 한다
- 드래그한 이동 거리는 마우스 현재 좌표 - 시작 좌표로 구할 수 있다(방향+거리 개념)
- mouse move 이벤트는 마우스가 움직일 때마다 계속 실행되기 때문에 drag trigger 변수를 만들어 mouse down 시에만 실행 해주는 것이 필요하다

### mobile drag event
(사이트를 모바일기기로 테스트하려면 크롬 개발자 도구 좌상단 toggle device toolbar를 누르면 된다)
```js
document.querySelector('.slide-container').addEventListener('touchstart', function(e) {
    console.log(e.touches[0].clientX); // 처음 터치한 좌표
});
document.querySelector('.slide-container').addEventListener('touchmove', function(e) {
    console.log(e.touches[0].clientX); // 처음 터치의 이동 좌표
});
document.querySelector('.slide-container').addEventListener('touchend', function(e) {
    console.log(e.changedTouches[0].clientX); // 터치 뗄 때 좌표
});
```
- 모바일 터치 이벤트는 마우스 이벤트와 별개로 존재하므로, 터치 이벤트까지 사이트에 적용하고 싶다면 마우스 + 터치 이벤트를 모두 구축해주어야 한다
- 터치 이벤트는 1) touch start, 2) touch move, 3) touch end 를 사용할 수 있다
- 주의할 점은 마우스 이벤트와 달리 e.clientX 가 아닌 1), 2)의 경우에는 e.touches[0].clientX를 사용, 3)의 경우에는 e.changedTouches[0].clientX를 사용하여 다수의 터치 가능성에서 첫 번째 터치 값을 사용하도록 해야 한다
- 위와 같은 기능을 쉽게 제공해주는 Hammer.js 와 같은 라이브러리도 존재한다

### 응용 take-away(carousel drag event)
```html
<div style="overflow: hidden;">
    <div class="slide-container">
        <div class="slide-box">
            <img src="/img/car1.png" draggable="false">
        </div>
        <div class="slide-box">
            <img src="/img/car2.png" draggable="false">
        </div>
        <div class="slide-box">
            <img src="/img/car3.png" draggable="false">
        </div>
    </div>
</div>
```
```js
var drag_start = 0;
var drag_dist = 0;
var drag = false;
var slide_width = slide_container.clientWidth / 3;

slide_container.addEventListener('mousedown', function(e) {
    drag = true;
    drag_start = e.clientX;
    slide_container.style.transition = 'none';
});
slide_container.addEventListener('mousemove', function(e) {
    if ( drag ) {
        drag_dist = e.clientX - drag_start;
        slide_container.style.transform = `translateX(${drag_dist - (slide_width * (slide_num - 1))}px)`;
    }; 
});
slide_container.addEventListener('mouseup', function(e) {
    drag = false;
    slide_container.style.transition = 'all 0.5s';
    if ( drag_dist < -250 && drag_dist < 0 ) {
        slide_next();
    } else if ( drag_dist >= -250 && drag_dist < 0 ) {
        slide_container.style.transform = `translateX(-${(slide_num - 1)}00vw)`;
    } else if ( drag_dist > 250 && drag_dist > 0 ) {
        slide_prev();
    }
});
```
0. html image drage
    - html에서는 개체 드래그가 허용되어 있기 때문에 draggable = 'false' 속성을 원하는 개체에 넣어 주어야 한다
    - 다만, 부모 개체에 적용해도 제대로 적용되지 않았고, 드래그하는 이미지 개체에 직접 적용해주어야 했다

1. 이미지 넘겨 주기 위한 transform: translateX() 적용
    - 위와 같이 overflow: hidden 된 div 안에 3개의 이미지를 가진 div의 경우(캐로셀이면 거의 그렇겠지만..), 당연하게도 마우스 위치 좌표는 몇 번째 슬라이드인지에 무관하게 절대 좌표를 출력한다
    - 첫 번째 슬라이드 오른쪽 클릭해도 650, 두 번째 슬라이드 오른쪽 클릭해도 650...
    - 따라서 이동 거리를 그대로 translateX 에 넣어주면 첫번째 그림으로만 돌아간다(전체 slide-container 길이 중 0~650 위치만 설정되기 때문에)
    - 그래서 각 슬라이드 번호에 맞게 translateX를 변환해주어야 했다(이동 거리 - (슬라이드 너비 * (슬라이드 넘버 - 1)))

2. 슬라이드 너비의 변화 & 단위
    - 슬라이드 너비는 view port에 따라 변하게 되어 있어 고정된 값을 사용할 수 없었다
    - 또한 .clientX 값이 px 단위이기 때문에 기존 버튼 구현처럼 vw 단위를 사용할 수도 없었다(px + vw도 안됐음..)
    - 그래서 현재 view port에서의 슬라이드 너비를 px 단위로 구하기 위해 selector('.slide-container').clientWidth 를 사용했다
    - 이 때 나오는 값은 slide-container의 너비이기 때문에 3으로 나누어 주었다(개별 slide-box의 너비를 사용해도 될 듯)

3. mousemove 와 transition 
    - 수식을 검토하고 검산했는데도 슬라이드를 드래그할 때 view port 사이즈에 따라 반대로 움직이거나 등 기이한 현상(...)이 반복됐다
    - 원인은 mouse move 시 transition을 길게 줄 경우 translateX 가 제대로 적용되지 않는 것 같았다 (여기서는 0.5s 미만에서 어느 정도 제대로 작동)
    - 따라서 mouse move 시에는 transition 속성을 none으로 바꿔주고, mouse up 시에 다시 transition 속성을 부여해 부드럽게 넘어가도록 했다