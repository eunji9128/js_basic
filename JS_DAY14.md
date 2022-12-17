# js_basic

## position: sticky
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

