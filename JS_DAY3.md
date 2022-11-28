# js_basic

## Simple Animation
### one-way animation
1. 시작 스타일 class 만들기
2. 최종 스타일 class 만들기
3. 이벤트 트리거 시 최종 클래스로 변경되도록 JS 코드 작성
4. 시작 스타일 class에 transition 추가
```html
<body>
    <div>
        <div class="black-bg">
            <div class="white-bg">
            <h4>로그인하세요</h4>
            <button class="btn btn-danger" id="close">닫기</button>
            </div>
        </div>
    </div> 
</body>
```
```css
.black-bg {
    width : 100%;
    height : 100%;
    position : fixed;
    background : rgba(0,0,0,0.5);
    z-index : 5;
    padding: 30px;
    visibility: hidden;
    opacity: 0;
    transition: all 1s;
}

.show {
    visibility: visible;
    opacity: 1;

}
```
- 시작 스타일: black-bg class로 visibility: hidden, opacity: 0으로 보이지 않게 처리 해두었다
    - (참고) display: none은 html에서 아예 없애는 개념으로 보이지 않게 되는 것이고, visibility: hidden은 시각적으로 숨김 처리 되는 것이므로 애니메이션 적용 시에는 visibility 속성을 활용하는 것이 좋다
- 최종 스타일 & JS trigger: black-bg class에 show class를 더해 visible 상태로 변경되도록 해준다
- transition: 시작 스타일에 transition: all 1s로 모든 css 속성이 변경될 때 1초 딜레이가 생기도록 해주었다



