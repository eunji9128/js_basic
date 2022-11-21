# js_basic

## JavaScript 개요
### JavaScript 사용
```html
<body>
    <h1 id='hello'>안녕하세요</h1>

    <script>
        document.getElementById('hello').innerHTML = '안녕';
    </script>
</body>
```
- HTML을 조작하기 위한 language
- HTML body tag > script tag에 JS 문법을 작성하면 된다
    - (참고) HTML 리딩 후 JS 적용이 되어야 하기 때문에 script가 body tag 상단에 위치하면 동작이 안될 수 있다

### 기본적인 UI 만들기
```html
<body>
    <div class="alert-box">알림창</div>
</body>
```
```css
.alert-box {
    background-color: skyblue;
    padding: 20px;
    color: white;
    border-radius: 5px;
    display: none; /* 숨김 */
}
```
1. HTML, CSS로 미리 UI 디자인 후 숨김 처리

```html
<body>
    <div class="alert-box" id="alert">알림창</div>
    <button onclick="document.getElementById('alert').style.display = 'block';">버튼</button>
</body>
```
2. 버튼을 누르거나 하는 이벤트 시 UI 보여지도록 JS 코딩

### function 활용
```html
<body>
    <div class="alert-box" id="alert">알림창</div>
    <button onclick="openAlert()">버튼</button>

    <script>
        function openAlert() {
            document.getElementById('alert').style.display = 'block';
        }
    </script>
</body>
```
- 긴 JS 동작 코드를 function 으로 만들어 활용할 수 있다


