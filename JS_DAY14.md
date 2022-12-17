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
